const {
  rangeWords,
  prepositionWords,
  nounPatterns
} = require("./parserDefinitions");

const determineRuleType = ruleString => {
  if (typeof ruleString !== "string") {
    throw "Invalid rule format: not a string.";
  }
  if (ruleString.length < 2) {
    throw "Invalid rule format: too short.";
  }

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

  for (let nounPattern of nounPatterns) {
    if (nounPattern.test(ruleString)) {
      return "nounRule";
    }
  }

  throw "Invalid rule format: unrecognized type.";
};

module.exports = determineRuleType;
