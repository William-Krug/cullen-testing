const sum = require('./sum.js');

/*
  Happy Path
*/
test('should add two numbers together, and return the sum', () => {
  // this is where my test code goes
  const result = sum(83, 6);
  // console.log('sum of 83 and 6 should be 89', result);

  expect(result).toBe(89);
});

test('should add positive to negative', () => {
  const result = sum(83, -6);
  expect(result).toBe(77);
});

test('should add negative to positive', () => {
  const result = sum(-6, 83);
  expect(result).toBe(77);
});

test('should add two negative numbers', () => {
  const result = sum(-83, -6);
  expect(result).toBe(-89);
});

test('should return original number if 2nd number is zero', () => {
  const result = sum(171, 0);
  expect(result).toBe(171);
});

test('should return second number if 1st number is zero', () => {
  const result = sum(0, 69);
  expect(result).toBe(69);
});

test('should return zero if both numbers are zero', () => {
  const result = sum(0, 0);
  expect(result).toBe(0);
});

/*
  Missing Input Path
*/
test('should fail if I give it only one argument', () => {
  expect(() => {
    sum(83);
  }).toThrow(`You're missing an argument!`);
});

test('should fail if I give it no arguments', () => {
  expect(() => {
    sum();
  }).toThrow(`You're missing an argument!`);
});

/*
  Bad Input Path
*/
test('should convert number strings to numbers eg ("9" + "3")', () => {
  const result = sum('9', '3');
  expect(result).toBe(12);
});

test('should convert number strings to numbers eg (9 + "3")', () => {
  const result = sum(9, '3');
  expect(result).toBe(12);
});

test('should convert number strings to numbers eg ("9" + 3)', () => {
  const result = sum('9', 3);
  expect(result).toBe(12);
});
