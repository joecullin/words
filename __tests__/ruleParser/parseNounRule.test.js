const testData = require("../testData");
const parseNounRule = require("../../src/ruleParser/parseNounRule");
const stringToNumber = require("../../src/ruleParser/stringToNumber");

describe("ruleParser: parseNounRule", () => {
  Object.keys(testData).forEach(testId => {
    const testCase = testData[testId];
    if (
      testCase.expected.parsedRule.ruleType === "nounRule" &&
      testCase.expected.parsedNoun
    ) {
      test(`parseNounRule: ${testId}: ${testCase.input.rule}`, () => {
        const result = parseNounRule(testCase.input.rule);
        expect(result).toMatchObject(testCase.expected.parsedNoun);
      });
    }
  });
});

describe("ruleParser: stringToNumber", () => {
  test("stringToNumber: ordinal", () => {
    const result = stringToNumber("one hundredth");
    expect(result).toBe(100);
  });
  test("stringToNumber: literal", () => {
    const result = stringToNumber("100");
    expect(result).toBe(100);
  });
  test("stringToNumber: invalid", () => {
    expect(() => {
      stringToNumber("!!!");
    }).toThrow();
  });
});
