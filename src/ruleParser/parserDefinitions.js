const rangeWords = ["through"];
const prepositionWords = ["preceding", "following"];
const nounWords = ["string", "email", "dollars"];
const nounPatterns = [
  /^string$/,
  /^email$/,
  /^dollars?$/,
  /words?$/,
  /^date$/,
  /^["].*?["]$/,
  /^['].*?[']$/
];

module.exports = { rangeWords, prepositionWords, nounWords, nounPatterns };
