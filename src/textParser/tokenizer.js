const tokenizer = textString => {
  let tokens = textString.split(/\s+/);
  return tokens;
};

module.exports = tokenizer;
