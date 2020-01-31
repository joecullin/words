const { prepositionWords } = require("./parserDefinitions");
const parseNounRule = require("./parseNounRule");

const parsePrepositionRule = ruleString => {
  // console.debug("parsePrepositionRule", ruleString);

  let parsed = {
    captureNounString: "",
    captureNoun: {},
    preposition: "",
    anchorNounString: "",
    anchorNoun: {}
  };

  // Find the earliest preposition.
  // (so we don't get thrown off by "3rd word following 'preceding'")
  let prepositionPositions = prepositionWords
    .map(preposition => {
      return { preposition, index: ruleString.indexOf(preposition) };
    })
    .filter(result => result.index !== -1);
  prepositionPositions.sort((a, b) => a.index - b.index);
  parsed.preposition = prepositionPositions[0].preposition;
  // console.debug("prepositionPositions", prepositionPositions);

  const prepositionIndex = prepositionPositions[0].index;
  parsed.captureNounString = ruleString.substring(0, prepositionIndex - 1);
  parsed.anchorNounString = ruleString.substring(
    prepositionIndex + parsed.preposition.length + 1
  );

  parsed.captureNoun = parseNounRule(parsed.captureNounString);
  parsed.anchorNoun = parseNounRule(parsed.anchorNounString);

  console.debug("parsed preposition", parsed);
  return parsed;
};

module.exports = parsePrepositionRule;
