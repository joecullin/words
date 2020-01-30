const testData = {
  t1: {
    input: {
      rule: "second word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: {
        valid: true,
        ruleType: "nounRule",
        noun: {
          nounType: "nthWord",
          wordCount: 2
        }
      },
      parsedNoun: { nounType: "nthWord", numberString: "second", wordCount: 2 },
      tokenCount: 13,
      tokens: [
        "Some",
        "random",
        "string",
        "that",
        "will",
        "change",
        "over",
        "every",
        "request",
        "and",
        "can",
        "be",
        "anything"
      ],
      result: {
        value: "string",
        success: true
      }
    }
  },
  t2: {
    input: {
      rule: "second through 4th word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t3: {
    input: {
      rule: "email following 3 words",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "email",
        preposition: "following",
        anchorNoun: "3 words"
      }
    }
  },
  t4: {
    input: {
      rule: 'string preceding "phone"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "preceding",
        anchorNoun: '"phone"'
      }
    }
  },
  t5: {
    input: {
      rule: "string preceding 'phone'",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "preceding",
        anchorNoun: "'phone'"
      }
    }
  },
  t6: {
    input: {
      rule: 'date preceding "Phone"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "date",
        preposition: "preceding",
        anchorNoun: '"Phone"'
      }
    }
  },
  t7: {
    input: {
      rule: "dollars following 3 words",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "dollars",
        preposition: "following",
        anchorNoun: "3 words"
      }
    }
  },
  t8: {
    input: {
      rule: 'string preceding "following"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "preceding",
        anchorNoun: '"following"'
      }
    }
  },
  t8a: {
    input: {
      rule: 'string following "preceding"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "following",
        anchorNoun: '"preceding"'
      }
    }
  },
  t9: {
    input: {
      rule: "totally bogus rule",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: false, ruleType: "" },
      tokenCount: 13
    }
  },
  t10: {
    input: {
      rule: "word following email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "word",
        preposition: "following",
        anchorNoun: "email"
      }
    }
  },
  t11: {
    input: {
      rule: 'string preceding "preceding"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "preceding",
        anchorNoun: '"preceding"'
      }
    }
  },
  t12: {
    input: {
      rule: 'string preceding "preceding word"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "string",
        preposition: "preceding",
        anchorNoun: '"preceding word"'
      }
    }
  },
  t13: {
    input: {
      rule: '"phone" preceding string',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: '"phone"',
        preposition: "preceding",
        anchorNoun: "string"
      }
    }
  },
  t14: {
    input: {
      rule: "second email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: false, ruleType: "" },
      tokenCount: 13
    }
  },
  t15: {
    input: {
      rule: "3 words",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "nounRule" },
      parsedNoun: { nounType: "nWords", numberString: "3", wordCount: 3 },
      tokenCount: 13
    }
  },
  t16: {
    input: {
      rule: "3 words following email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "3 words",
        preposition: "following",
        anchorNoun: "email"
      }
    }
  },
  t17: {
    input: {
      rule: "dollars following 3rd word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "dollars",
        preposition: "following",
        anchorNoun: "3rd word"
      }
    }
  },
  t18: {
    input: {
      rule: "second word through 4th",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t19: {
    input: {
      rule: "10th word following email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "10th word",
        preposition: "following",
        anchorNoun: "email"
      }
    }
  },
  t20: {
    input: {
      rule: 'second through 4th word following "phone number"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "second through 4th word",
        preposition: "following",
        anchorNoun: '"phone number"'
      }
    }
  },
  t21: {
    input: {
      rule: 'word preceding "my ol\' phone"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "word",
        preposition: "preceding",
        anchorNoun: `"my ol' phone"`
      }
    }
  },
  t22: {
    input: {
      rule: 'word preceding "my old" phone"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "word",
        preposition: "preceding",
        anchorNoun: '"my old" phone"'
      }
    }
  },
  t23: {
    input: {
      rule: 'word preceding "my old" phone"',
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "word",
        preposition: "preceding",
        anchorNoun: '"my old" phone"'
      }
    }
  },
  t24: {
    input: {
      rule: "2nd word following \"Alexis' 'work' phone\"",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "2nd word",
        preposition: "following",
        anchorNoun: `"Alexis' 'work' phone"`
      }
    }
  },
  t25: {
    input: {
      rule: "3rd email following 5th word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "3rd email",
        preposition: "following",
        anchorNoun: "5th word"
      }
    }
  },
  t26: {
    input: {
      rule: "3rd email through 5th email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t27: {
    input: {
      rule: "3rd email through 50th word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t28: {
    input: {
      rule: "one hundredth word through 102nd word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t29: {
    input: {
      rule: "102nd word through 100th word",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "rangeRule" },
      tokenCount: 13
    }
  },
  t30: {
    input: {
      rule: "💸 following 3 words",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "💸",
        preposition: "following",
        anchorNoun: "3 words"
      }
    }
  },
  t31: {
    input: {
      rule: "💲 following email",
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: true, ruleType: "prepositionRule" },
      tokenCount: 13,
      parsedPreposition: {
        captureNoun: "💲",
        preposition: "following",
        anchorNoun: "email"
      }
    }
  },
  t32: {
    input: {
      rule: 10,
      text:
        "Some random string that will change over every request and can be anything"
    },
    expected: {
      parsedRule: { valid: false, ruleType: "" },
      tokenCount: 13
    }
  }
};

module.exports = testData;
