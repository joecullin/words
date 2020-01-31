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

// No test here, just a utility to dump the end-to-end tests as curl commands.
describe("end-to-end with curl", () => {
  if (process.env.WORDS_URL) {
    Object.keys(e2eTestData).forEach(testId => {
      const testCase = e2eTestData[testId];
      test(`end-to-end with curl: ${testId}: ${testCase.input.rule}`, () => {
        const postBody = JSON.stringify(testCase.input);
        const curlCommand = `curl -v '${process.env.WORDS_URL}' -H 'Content-Type: application/json' -d '${postBody}'`;
        console.log(curlCommand);
        expect(1).toBe(1);
      });
    });
  }
});
