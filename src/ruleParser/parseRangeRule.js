const stringToNumber = require("./stringToNumber");

const parseRangeRule = ruleString => {
  console.debug("parseRangeRule", ruleString);

  let parsed = {
    startIndex: 0,
    endIndex: 0
  };

  const wordsRegex = /words?/g;
  ruleString.replace(wordsRegex, "");
  // next line should be using rangeWords, but it's getting late.
  const parts = ruleString.split(" through ").map(part => part.trim());

  console.debug("ruleString", ruleString);
  console.debug("parts", parts);

  parsed.startIndex = stringToNumber(parts[0]);
  parsed.endIndex = stringToNumber(parts[1]);

  console.debug("parsed range", parsed);
  return parsed;
};

module.exports = parseRangeRule;
