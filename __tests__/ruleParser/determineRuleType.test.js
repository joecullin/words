const testData = require("../testData");
const determineRuleType = require("../../src/ruleParser/determineRuleType");

describe("ruleParser: determineRuleType", () => {
  Object.keys(testData).forEach(testId => {
    test(`Rule Type: ${testId}: ${testData[testId].input.rule}`, () => {
      const testCase = testData[testId];
      const ruleType = determineRuleType(testCase.input.rule);
      expect(testCase.expected.ruleType).toEqual(ruleType);
    });
  });
});
