/**
 * Divide the numerator by the denominator
 * @param {number} numerator - The numerator
 * @param {number} denominator - The denominator
 * @returns {number} The result of the division
 * @throws {Error} If the denominator is zero
 */
const divideFunction = (numerator, denominator) => {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
};

export default divideFunction;
