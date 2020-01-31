const nounRuleProcessor = require("./nounRuleProcessor");
const prepositionRuleProcessor = require("./prepositionRuleProcessor");
const rangeRuleProcessor = require("./rangeRuleProcessor");

const processRule = ({ text, parsedRule }) => {
  console.debug("processRule", { text, parsedRule });

  if (parsedRule.ruleType === "nounRule") {
    const result = nounRuleProcessor({ text, parsedRule });
    return result;
  } else if (parsedRule.ruleType === "prepositionRule") {
    const result = prepositionRuleProcessor({ text, parsedRule });
    return result;
  } else if (parsedRule.ruleType === "rangeRule") {
    const result = rangeRuleProcessor({ text, parsedRule });
    return result;
  }

  return {};
};

module.exports = processRule;
