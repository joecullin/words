const {
  isEmail,
  isDollars,
  isDate
} = require("../../src/processor/wordMatchers");

describe("wordMatchers", () => {
  test("wordMatchers: isEmail", () => {
    expect(isEmail("joe@example.com")).toBe(true);
  });

  test("wordMatchers: isDate", () => {
    expect(isDate("2020-01-30")).toBe(true);
    expect(isDate("hello")).toBe(false);
  });

  test("wordMatchers: isDollars", () => {
    expect(isDollars("$4")).toBe(true);
    expect(isDollars("$.01")).toBe(true);
    expect(isDollars("$5.50")).toBe(true);
    expect(isDollars("$0.25")).toBe(true);
    expect(isDollars("$5.5")).toBe(false);
    expect(isDollars("$")).toBe(false);
    expect(isDollars("$.")).toBe(false);
    expect(isDollars("4.00")).toBe(false);
  });
});
