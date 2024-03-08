/**
 * Sign up a user and return a resolved promise with user details
 * @param {string} firstName - First name of the user
 * @param {string} lastName - Last name of the user
 * @returns {Promise<Object>} A resolved Promise with user details
 */
const signUpUser = (firstName, lastName) => {
  return Promise.resolve({ firstName, lastName });
};

export default signUpUser;
