const { wordsToNumbers } = require("words-to-numbers");

const stringToNumber = numberString => {
  const number = parseInt(wordsToNumbers(numberString));
  if (isNaN(number)) {
    throw "wordsToNumbers: unable to parse number";
  }
  return number;
};

module.exports = stringToNumber;
