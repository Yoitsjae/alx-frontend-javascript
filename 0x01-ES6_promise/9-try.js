/**
 * Create and return an array with values returned by mathFunction or error messages if any
 * @param {Function} mathFunction - Function to execute
 * @returns {Array} An array with values returned by mathFunction or error messages
 */
const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
};

export default guardrail;
