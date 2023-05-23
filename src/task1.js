function stringLength(str) {
  const strLength = str.length;
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (strLength < 1 || strLength > 10) {
    throw new Error('String length should be between 1 and 10 characters');
  }
}
module.exports = stringLength;