const processorTestData = {
  t1: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nWords",
          wordCount: 4
        },
        preposition: "preceding",
        anchorNoun: {
          nounType: "email"
        }
      }
    },
    expected: {
      value: "will change over every",
      success: true
    }
  },
  t1a: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok? how is that"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nWords",
          wordCount: 4
        },
        preposition: "following",
        anchorNoun: {
          nounType: "email"
        }
      }
    },
    expected: {
      value: "ok? how is that",
      success: true
    }
  },
  t1b: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com ok? too short"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nWords",
          wordCount: 4
        },
        preposition: "following",
        anchorNoun: {
          nounType: "email"
        }
      }
    },
    expected: {
      value: "",
      success: false
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
  },
  t7: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "email"
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t8: {
    input: {
      text:
        "Some random string that will change over every joe@joecullin.com how much $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "quotedPhrase",
          tokens: ["how", "much"],
          value: "how much"
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t9: {
    input: {
      text:
        "Some random string that will change over every 2019-01-01 $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t9a: {
    input: {
      text:
        "Some random string that will change over every 2001-02-03 $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t9b: {
    input: {
      text: "Some random string that will change over every aa2019 $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t10: {
    input: {
      text: "Some random string that will change over every $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nWords",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t10a: {
    input: {
      text: "Some $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nWords",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t10b: {
    input: {
      text: "Some big $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nWords",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t10c: {
    input: {
      text:
        "Some big old $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nWords",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "$100",
      success: true
    }
  },
  t11: {
    input: {
      text: "Some random string that will change over every $4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "$4.05",
      success: true
    }
  },
  t11a: {
    input: {
      text: "Some $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t11b: {
    input: {
      text: "Some big $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t11c: {
    input: {
      text:
        "Some big old $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "dollars"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "$100",
      success: true
    }
  },
  t12: {
    input: {
      text:
        "Some big old $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "string"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 3
        }
      }
    },
    expected: {
      value: "$100 random string that will change over every 4.05 ok?",
      success: true
    }
  },
  t12a: {
    input: {
      text:
        "Some big old $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "string"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 7
        }
      }
    },
    expected: {
      value: "will change over every 4.05 ok?",
      success: true
    }
  },
  t12b: {
    input: {
      text:
        "Some big old $100 random string that will change over every 4.05 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "string"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 14
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t13: {
    input: {
      text:
        "Some big old $100 random string that will change over every 2020-01-01 ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "date"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 11
        }
      }
    },
    expected: {
      value: "2020-01-01",
      success: true
    }
  },
  t13a: {
    input: {
      text:
        "Some big old $100 random string that will change over every 20200101a ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "date"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 11
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t14: {
    input: {
      text:
        "Some big old $100 random string that will change over every 20200101a ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nthWord",
          wordCount: 3
        },
        preposition: "following",
        anchorNoun: {
          nounType: "nthWord",
          wordCount: 6
        }
      }
    },
    expected: {
      value: "change",
      success: true
    }
  },
  t14a: {
    input: {
      text:
        "Some big old $100 random string that will change over every 2020-01-01 days ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nthWord",
          wordCount: 2
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "ok?",
      success: true
    }
  },
  t14b: {
    input: {
      text:
        "Some big old $100 random string that will change over every 2020-01-01 days ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "nthWord",
          wordCount: 3
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "",
      success: false
    }
  },
  t15: {
    input: {
      text:
        "Some big old $100 random string that will change over every 2020-01-01 how much ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "quotedPhrase",
          tokens: ["how", "much"],
          value: "how much"
        },
        preposition: "following",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "how much",
      success: true
    }
  },
  t16: {
    input: {
      text:
        "Some big old $100 random string that will change over every 2020-01-01 how much ok?"
    },
    parsedRule: {
      valid: true,
      ruleType: "prepositionRule",
      preposition: {
        captureNoun: {
          nounType: "quotedPhrase",
          tokens: ["over", "every"],
          value: "over every"
        },
        preposition: "preceding",
        anchorNoun: {
          nounType: "date"
        }
      }
    },
    expected: {
      value: "over every",
      success: true
    }
  }
};
const processorTestData2 = {};

module.exports = processorTestData;
