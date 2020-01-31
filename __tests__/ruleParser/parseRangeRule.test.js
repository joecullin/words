const testData = require("../testData");
const parseRangeRule = require("../../src/ruleParser/parseRangeRule");

describe("ruleParser: parseRangeRule", () => {
  Object.keys(testData).forEach(testId => {
    const testCase = testData[testId];
    if (
      testCase.expected.parsedRule.ruleType === "rangeRule" &&
      testCase.expected.parsedRange
    ) {
      test(`parseRangeRule: ${testId}: ${testCase.input.rule}`, () => {
        const result = parseRangeRule(testCase.input.rule);
        expect(result).toMatchObject(testCase.expected.parsedRange);
      });
    }
  });
});
