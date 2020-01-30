const parseRule = require("../ruleParser/parseRule");
const processRule = require("../processor/processRule");

const words = ({ rule, text }) => {
  const parsedRule = parseRule(rule);
  console.debug("words parsedRule", parsedRule);

  let response = {
    value: "",
    success: false,
    info: ""
  };

  if (!parsedRule.valid) {
    response.info = "Invalid rule";
  } else {
    const result = processRule({ parsedRule, text });
    if (result.success) {
      response.value = result.value;
      response.success = true;
    } else {
      response.info = "Processing error";
    }
  }

  console.debug("words response", response);

  return response;
};

module.exports = words;
