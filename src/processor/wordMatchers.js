const isemail = require("isemail");
const moment = require("moment");

const isEmail = word => {
  return isemail.validate(word);
};

// Thought it would be nice to use moment for more
// flexible dates like yyyymmdd or yyyy.mm.dd, but
// it was too loose. Treated "$100" as a valid date.
// So, back to just yyyy-mm-dd for now.
const dateFormat = "YYYY-MM-DD";
const isDate = word => {
  return moment(word, dateFormat, true).isValid();
};
const formatDate = word => {
  return moment(word, dateFormat, true).format(dateFormat);
};

const isDollars = word => {
  // Not perfect, but good enough
  if (word !== undefined && word.length < 2) {
    return false;
  }
  const regex = /^[$][0-9,]*([.]\d\d)?$/;
  return regex.test(word);
};

module.exports = { isEmail, isDate, formatDate, isDollars };
