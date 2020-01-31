const tokenizer = require("../textParser/tokenizer");

const rangeRuleProcessor = ({ text, parsedRule }) => {
  console.debug("starting rangeRuleProcessor", parsedRule);
  let processorResult = {
    value: "",
    success: false
  };

  try {
    const tokens = tokenizer(text);
    processorResult.value = tokens
      .slice(parsedRule.range.startIndex-1, parsedRule.range.endIndex)
      .join(" ");
    processorResult.success = true;
  } catch (err) {
    console.error("processor: ", err);
    processorResult.success = false;
  }

  console.debug("rangeRuleProcessor result", processorResult);
  return processorResult;
};

module.exports = rangeRuleProcessor;
