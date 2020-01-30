const testData = require("../testData");
const determineRuleType = require("../../src/ruleParser/determineRuleType");

describe("ruleParser: determineRuleType", () => {
  Object.keys(testData).forEach(testId => {
    test(`Rule Type: ${testId}: ${testData[testId].input.rule}`, () => {
      const testCase = testData[testId];

      if (testCase.expected.parsedRule.valid) {
        const ruleType = determineRuleType(testCase.input.rule);
        expect(testCase.expected.parsedRule.ruleType).toBe(ruleType);
      } else {
        expect(() => {
          determineRuleType(testCase.input.rule);
        }).toThrow();
      }
    });
  });
});
