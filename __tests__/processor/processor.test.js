const processorTestData = require("./processorTestData");
const nounRuleProcessor = require("../../src/processor/nounRuleProcessor");
const prepositionRuleProcessor = require("../../src/processor/prepositionRuleProcessor");

describe("processor", () => {
  Object.keys(processorTestData).forEach(testId => {
    const testCase = processorTestData[testId];

    if (testCase.parsedRule.ruleType === "nounRule") {
      test(`nounRuleProcessor ${testId}`, () => {
        const result = nounRuleProcessor({
          text: testCase.input.text,
          parsedRule: testCase.parsedRule
        });
        expect(result.value).toEqual(testCase.expected.value);
        expect(result.success).toEqual(testCase.expected.success);
      });
    }

    if (testCase.parsedRule.ruleType === "prepositionRule") {
      test(`prepositionRuleProcessor ${testId}`, () => {
        const result = prepositionRuleProcessor({
          text: testCase.input.text,
          parsedRule: testCase.parsedRule
        });
        expect(result.value).toEqual(testCase.expected.value);
        expect(result.success).toEqual(testCase.expected.success);
      });
    }
  });
});
