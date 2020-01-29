const testData = require("../testData");
const tokenizer = require("../../src/textParser/tokenizer");

describe("textParser: tokenizer", () => {
  Object.keys(testData).forEach(testId => {
    const testCase = testData[testId];

    // snippet is just for quick debugging, so I can spot the problem in the test run output.
    const snippet = testCase.input.text.substring(0, 20);

    const tokens = tokenizer(testCase.input.text);

    test(`tokenizer count: ${testId}: ${snippet}`, () => {
      expect(testCase.expected.tokenCount).toEqual(tokens.length);
    });

    // I only bothered to capture full tokenized data in a few test cases.
    if (testCase.expected.tokens !== undefined) {
      test(`tokenizer deep check: ${testId}: ${snippet}`, () => {
        expect(testCase.expected.tokens).toEqual(tokens);
      });
    }
  });
});
