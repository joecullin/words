const e2eTestData = {
  t1: {
    input: { rule: "four words", text: "Some random string that will change" },
    expected: { value: "Some random string that", success: true }
  },
  t2: {
    input: {
      rule: "1st word",
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    expected: { value: "Some", success: true }
  },
  t3: {
    input: {
      rule: "second word",
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    expected: { value: "random", success: true }
  },
  t4: {
    input: {
      rule: "second through 4th word",
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    expected: { value: "random string that", success: true }
  },
  t6: {
    input: {
      rule: 'string preceding "phone"',
      text:
        "Some random string that will phone over every joe@joecullin.com ok?"
    },
    expected: { value: "Some random string that will", success: true }
  },
  t7: {
    input: {
      rule: "string preceding 'phone'",
      text:
        "Some random string that will phone over every joe@joecullin.com ok?"
    },
    expected: { value: "Some random string that will", success: true }
  },
  t8: {
    input: {
      rule: 'date preceding "Phone"',
      text: "Some random string that will change over every 2020-01-01 Phone"
    },
    expected: { value: "2020-01-01", success: true }
  },
  t8a: {
    input: {
      rule: 'date preceding "Phone"',
      text: "Some random string that will change over every 2020-01-01 phone."
    },
    expected: { value: "", success: false }
  },
  t9: {
    input: {
      rule: "dollars following 3 words",
      text:
        "Some random string person $100 will change over every joe@joecullin.com ok?"
    },
    expected: { value: "$100", success: true }
  }
};

const e2eTestData2 = {
  t4: {
    input: {
      rule: "second through 4th word",
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    expected: { value: "random string that", success: true }
  }
};

module.exports = e2eTestData;
