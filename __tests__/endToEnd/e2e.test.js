const e2eTestData = require("./e2eTestData");
const words = require("../../src/routes/words");

describe("end-to-end", () => {
  Object.keys(e2eTestData).forEach(testId => {
    const testCase = e2eTestData[testId];
    test(`end-to-end: ${testId}: ${testCase.input.rule}`, () => {
      const result = words({
        rule: testCase.input.rule,
        text: testCase.input.text
      });
      expect(result.success).toBe(testCase.expected.success);
      expect(result.value).toBe(testCase.expected.value);
    });
  });
});
