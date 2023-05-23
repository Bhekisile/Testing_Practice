const capitalizedString = require('./task4.js');

it('capitalize first character', () => {
  expect(capitalizedString('better')).toBe('Better');
});