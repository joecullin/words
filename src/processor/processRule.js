const nounRuleProcessor = require("./nounRuleProcessor");

const processRule = ({ text, parsedRule }) => {
  console.debug("processRule", { text, parsedRule });

  if (parsedRule.ruleType === "nounRule") {
    const result = nounRuleProcessor({ text, parsedRule });
    return result;
  }

  return {};
};

module.exports = processRule;
