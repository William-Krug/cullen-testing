/**
 * Adds two numbers together and returns the sum of their values
 * @param {number} numberOne
 * @param {number} numberTwo
 */
function sum(numberOne, numberTwo) {
  if (numberOne === undefined || numberTwo === undefined) {
    throw new Error(`You're missing an argument!`);
  } else {
    return Number(numberOne) + Number(numberTwo);
  }
}

module.exports = sum;
