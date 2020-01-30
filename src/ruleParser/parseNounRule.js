const { nounWords } = require("./parserDefinitions");
const stringToNumber = require("./stringToNumber");

const parseNounRule = ruleString => {
  console.debug("parseNounRule", ruleString);

  let parsed = {
    nounType: "",
    wordCount: 0,
    numberString: "",
    phrase: ""
  };

  if (nounWords.includes(ruleString)) {
    // Simple one-word nouns
    parsed.nounType = ruleString;
  } else if (/^["].*?["]$/.test(ruleString) || /^['].*?[']$/.test(ruleString)) {
    parsed.nounType = "quotedPhrase";
    parsed.phrase = ruleString.substring(0, ruleString.length - 1).substring(1);
  } else if (
    ruleString === "word" ||
    ruleString === "one word" ||
    ruleString === "1 word"
  ) {
    parsed.nounType = "nWords";
    parsed.wordCount = 1;
  } else if (/ words$/.test(ruleString)) {
    parsed.nounType = "nWords";
    parsed.numberString = ruleString.substring(0, ruleString.length - 6);
    parsed.wordCount = stringToNumber(parsed.numberString);
  } else if (/word$/.test(ruleString)) {
    parsed.nounType = "nthWord";
    parsed.numberString = ruleString.substring(0, ruleString.length - 5);
    parsed.wordCount = stringToNumber(parsed.numberString);
  } else {
    throw "parseNounRule: unrecognized format";
  }

  console.debug("parsed", parsed);
  return parsed;
};

module.exports = parseNounRule;
