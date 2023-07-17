const capitalizedString = require('./task4.js');

it('capitalize first character in a word', () => {
  expect(capitalizedString('better')).toBe('Better');
});