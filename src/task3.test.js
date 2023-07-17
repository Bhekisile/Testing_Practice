const mathOperations = require('./task3.js');

describe('Math operations tests', () => {
  it('adding 10 + 2 should return 12', () => {
    const result = mathOperations.sum(10, 2);
    expect(result).toBe(12);
  });
});

it('adding 30 + 6 should return 36', () => {
  const result = mathOperations.sum(30, 6);
  expect(result).toBe(36);
});

it('adding 18 + 6 should return 24', () => {
  const result = mathOperations.sum(18, 6);
  expect(result).toBe(24);
});

it('subtracting 2 from 10 should return 8', () => {
  const result = mathOperations.diff(10, 2);
  expect(result).toBe(8);
});

it('subtracting 6 from 30 should return 24', () => {
  const result = mathOperations.diff(30, 6);
  expect(result).toBe(24);
});

it('subtracting 6 from 18 should return 12', () => {
  const result = mathOperations.diff(18, 6);
  expect(result).toBe(12);
});

it('dividing 10 by 2 should return 5', () => {
  const result = mathOperations.quot(10, 2);
  expect(result).toBe(5);
});

it('dividing 30 by 6 should return 5', () => {
  const result = mathOperations.quot(30, 6);
  expect(result).toBe(5);
});

it('dividing 18 by 6 should return 3', () => {
  const result = mathOperations.quot(18, 6);
  expect(result).toBe(3);
});

it('multiplying 10 and 2 should return 20', () => {
  const result = mathOperations.product(10, 2);
  expect(result).toBe(20);
});

it('multiplying 30 and 6 should return 180', () => {
  const result = mathOperations.product(30, 6);
  expect(result).toBe(180);
});

it('multiplying 18 and 6 should return 108', () => {
  const result = mathOperations.product(18, 6);
  expect(result).toBe(108);
});