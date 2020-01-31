const tokenizer = require("../textParser/tokenizer");
const { isEmail, isDate, formatDate, isDollars } = require("./wordMatchers");

const findAnchor = ({ noun, tokens }) => {
  // console.debug/g("findAnchor args", { noun, tokens });

  let result = {
    startIndex: 0,
    endIndex: 0,
    value: "",
    success: false
  };
  if (!tokens.length) {
    return result;
  }

  if (noun.nounType === "email") {
    if (isEmail(tokens[0])) {
      result.success = true;
      result.value = tokens[0];
    }
  } else if (noun.nounType === "dollars") {
    if (isDollars(tokens[0])) {
      result.success = true;
      result.value = tokens[0];
    }
  } else if (noun.nounType === "date") {
    if (isDate(tokens[0])) {
      result.success = true;
      result.value = tokens[0];
    }
  } else if (noun.nounType === "nWords") {
    if (noun.wordCount <= tokens.length) {
      result.value = tokens.slice(0, noun.wordCount).join(" ");
      result.endIndex = noun.wordCount - 1;
      result.success = true;
    }
  } else if (noun.nounType === "nthWord") {
    if (noun.wordCount <= tokens.length) {
      result.value = tokens[noun.wordCount];
      result.endIndex = noun.wordCount - 1;
      result.success = true;
    }
  } else if (noun.nounType === "quotedPhrase") {
    if (noun.tokens.length <= tokens.length) {
      const phrase = noun.tokens.join(" ");
      const phraseCheck = tokens.slice(0, noun.tokens.length).join(" ");
      if (phrase === phraseCheck) {
        result.success = true;
        result.endIndex = noun.tokens.length - 1;
        result.value = phrase;
      }
    }
  }

  return result;
};

const findCapture = ({ noun, reverseSearch, tokens }) => {
  // console.debug/g("findCapture args", { noun, tokens });
  let result = {
    value: "",
    success: false
  };
  if (!tokens.length) {
    return result;
  }

  // reverseSearch flag (used by "preceding") tells us to search left-to-right.
  // Flip the array, then un-flip multi-word results.
  const reverseTokens = tokens => {
    return reverseSearch ? tokens.slice().reverse() : tokens;
  };
  tokens = reverseTokens(tokens);

  if (noun.nounType === "email") {
    if (isEmail(tokens[0])) {
      result.success = true;
      result.value = tokens[0];
    }
  } else if (noun.nounType === "dollars") {
    if (isDollars(tokens[0])) {
      result.success = true;
      result.value = tokens[0];
    }
  } else if (noun.nounType === "string") {
    if (tokens.length) {
      result.value = reverseTokens(tokens).join(" ");
      result.success = true;
    }
  } else if (noun.nounType === "date") {
    if (isDate(tokens[0])) {
      result.success = true;
      result.value = formatDate(tokens[0]);
    }
  } else if (noun.nounType === "nthWord") {
    if (noun.wordCount <= tokens.length) {
      result.success = true;
      result.value = tokens[noun.wordCount - 1];
    }
  } else if (noun.nounType === "nWords") {
    if (noun.wordCount <= tokens.length) {
      let resultTokens = tokens.slice(0, noun.wordCount);
      result.value = reverseTokens(resultTokens).join(" ");
      result.success = true;
    }
  } else if (noun.nounType === "quotedPhrase") {
    if (noun.tokens.length <= tokens.length) {
      const phrase = reverseTokens(noun.tokens).join(" ");
      const phraseCheck = tokens.slice(0, noun.tokens.length).join(" ");
      if (phrase === phraseCheck) {
        result.success = true;
        result.value = noun.tokens.join(" ");
      }
    }
  }

  return result;
};

// Split the token array so I'm left with just the "capture" side of it.
// For preceding: reverse the tokens array.
// Feed the tokens array and rule to nounProcessor.

const prepositionRuleProcessor = ({ text, parsedRule }) => {
  // console.debug/g("starting prepositionRuleProcessor", { text, parsedRule });
  // console.debug/g("still prepositionRuleProcessor: " + JSON.stringify(parsedRule));
  let processorResult = {
    value: "",
    success: false
  };

  try {
    const tokens = tokenizer(text);
    let startIndex = 0;
    while (startIndex < tokens.length && !processorResult.success) {
      const substringTokens = tokens.slice(startIndex);
      const anchor = findAnchor({
        noun: parsedRule.preposition.anchorNoun,
        tokens: substringTokens
      });
      if (anchor.success) {
        // console.debug/g(`found anchor at index ${startIndex}`, anchor);
        let searchTokens;
        let reverseSearch = false;
        if (parsedRule.preposition.preposition === "preceding") {
          searchTokens = tokens.slice(0, startIndex);
          reverseSearch = true;
        } else {
          // following
          searchTokens = tokens.slice(startIndex + anchor.endIndex + 1);
        }
        const capture = findCapture({
          noun: parsedRule.preposition.captureNoun,
          reverseSearch,
          tokens: searchTokens
        });
        if (capture.success) {
          // console.debug/g(`found capture at index ${startIndex}`, capture);
          processorResult.value = capture.value;
          processorResult.success = true;
        }
      }
      startIndex++;
    }
  } catch (err) {
    console.error("processor: ", err);
    processorResult.success = false;
  }

  // console.debug/g("prepositionRuleProcessor result", processorResult);
  return processorResult;
};

module.exports = prepositionRuleProcessor;
