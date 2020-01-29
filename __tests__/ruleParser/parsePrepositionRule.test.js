const testData = require("../testData");
const parsePrepositionRule = require("../../src/ruleParser/parsePrepositionRule");

describe("ruleParser: parsePrepositionRule", () => {
  Object.keys(testData).forEach(testId => {
    const testCase = testData[testId];
    if (testCase.expected.ruleType === "prepositionRule") {
      test(`parsePrepositionRule: ${testId}: ${testCase.input.rule}`, () => {
        const result = parsePrepositionRule(testCase.input.rule);

        expect(result).toMatchObject(testCase.expected.parsedPreposition);
      });
    }
  });
});
