const testData = require("../testData");
const parsePrepositionRule = require("../../src/ruleParser/parsePrepositionRule");

describe("ruleParser: parsePrepositionRule", () => {
  Object.keys(testData).forEach(testId => {
    const testCase = testData[testId];
    if (testCase.expected.parsedRule.ruleType === "prepositionRule") {
      test(`parsePrepositionRule: ${testId}: ${testCase.input.rule}`, () => {
        const result = parsePrepositionRule(testCase.input.rule);

        // Note: order matters here.
        // Result has more properties than test case.
        // It has the parsed noun data.
        // But we're just testing the preposition parsing here.
        expect(result).toMatchObject(testCase.expected.parsedPreposition);
      });
    }
  });
});
