function capitalizedString(str) {
  const string = str[0].toUpperCase() + str.slice(1);
  return string;
}
module.exports = capitalizedString;