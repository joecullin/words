const { rangeWords, prepositionWords } = require("./parserDefinitions");

const determineRuleType = ruleString => {
  for (let prepositionWord of prepositionWords) {
    if (ruleString.includes(" " + prepositionWord + " ")) {
      return "prepositionRule";
    }
  }

  for (let rangeWord of rangeWords) {
    if (ruleString.includes(" " + rangeWord + " ")) {
      return "rangeRule";
    }
  }

  return "nounRule";
};

module.exports = determineRuleType;
