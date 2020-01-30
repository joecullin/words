const determineRuleType = require("./determineRuleType");
const parsePrepositionRule = require("./parsePrepositionRule");
const parseNounRule = require("./parseNounRule");

const parseRule = ruleString => {
  console.debug("parseRule", ruleString);

  let parsed = {
    ruleType: "",
    valid: false
  };

  try {
    parsed.ruleType = determineRuleType(ruleString);

    if (parsed.ruleType === "nounRule") {
      parsed.noun = parseNounRule(ruleString);
    } else if (parsed.ruleType === "prepositionRule") {
      parsed.preposition = parsePrepositionRule(ruleString);
    }

    parsed.valid = true;
  } catch (err) {
    parsed.valid = false;
  }

  // console.debug("parsed", parsed);
  return parsed;
};

module.exports = parseRule;
