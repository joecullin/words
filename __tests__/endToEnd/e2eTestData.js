const e2eTestData = {
  t1: {
    input: {
      rule: "four words",
      text: "Some random string that will change"
    },
    expected: {
      value: "Some random string that",
      success: true
    }
  },
  t2: {
    input: {
      rule: "1st word",
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    expected: {
      value: "Some",
      success: true
    }
  }
};

module.exports = e2eTestData;
