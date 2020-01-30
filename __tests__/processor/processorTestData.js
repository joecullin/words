const processorTestData = {
  t1: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      captureNoun: {
        nounType: "words",
        wordCount: 4
      },
      preposition: "preceding",
      anchorNoun: {
        nounType: "email"
      }
    },
    expected: {
      value: "will change over every",
      success: true
    }
  },
  t2: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nthWord",
        wordCount: 4
      }
    },
    expected: {
      value: "that",
      success: true
    }
  },
  t3: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nthWord",
        wordCount: 12
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t3a: {
    input: {
      text: "Some random string"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nthWord",
        wordCount: 4
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t3b: {
    input: {
      text: "Some random string"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nthWord",
        wordCount: 3
      }
    },
    expected: {
      value: "string",
      success: true
    }
  },
  t4: {
    input: {
      text: "Some random string that will change over every ..."
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nWords",
        wordCount: 3
      }
    },
    expected: {
      value: "Some random string",
      success: true
    }
  },
  t5: {
    input: {
      text: "Some random string"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nWords",
        wordCount: 3
      }
    },
    expected: {
      value: "Some random string",
      success: true
    }
  },
  t6: {
    input: {
      text: "Some random string"
    },
    parsedRule: {
      valid: true,
      ruleType: "nounRule",
      noun: {
        nounType: "nWords",
        wordCount: 4
      }
    },
    expected: {
      value: "",
      success: false
    }
  }
};

module.exports = processorTestData;
