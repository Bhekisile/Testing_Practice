const stringLength = require('./task1.js');

describe('stringLength', () => {
  it('should throw an error if the input is not a string', () => {
    expect(() => stringLength(123)).toThrow('Input must be a string');
  });

  it('should throw an error if the string length is less than 1 or greater than 10', () => {
    expect(() => stringLength('')).toThrow('String length should be between 1 and 10 characters');
    expect(() => stringLength('anaesthetic')).toThrow('String length should be between 1 and 10 characters');
  });

  it('should not throw an error if the string length is between 1 and 10', () => {
    expect(() => stringLength('test')).not.toThrow();
    expect(() => stringLength('a')).not.toThrow();
    expect(() => stringLength('abcdefghij')).not.toThrow();
  });
});