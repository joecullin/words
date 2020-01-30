const tokenizer = require("../textParser/tokenizer");

const nthWord = ({ tokens, n }) => {
  if (tokens.length < n) {
    throw "nthWord: n is longer than string";
  }
  return tokens[n - 1];
};

const nWords = ({ tokens, n }) => {
  if (n > tokens.length) {
    throw "nWords: n is longer than string";
  }
  const slice = tokens.slice(0, n);
  console.debug("slice", slice);
  const string = slice.join(" ");
  return string;
  // return tokens.slice(0, n).join(" ");
};

const nounRuleProcessor = ({ text, parsedRule }) => {
  console.debug("starting nounRuleProcessor", parsedRule);
  let processorResult = {
    value: "",
    success: false
  };

  try {
    const tokens = tokenizer(text);
    if (parsedRule.noun.nounType === "nthWord") {
      processorResult.value = nthWord({ tokens, n: parsedRule.noun.wordCount });
    } else if (parsedRule.noun.nounType === "nWords") {
      processorResult.value = nWords({ tokens, n: parsedRule.noun.wordCount });
    }
    processorResult.success = true;
  } catch (err) {
    console.error("processor: ", err);
    processorResult.success = false;
  }

  console.debug("nounRuleProcessor result", processorResult);
  return processorResult;
};

module.exports = nounRuleProcessor;
