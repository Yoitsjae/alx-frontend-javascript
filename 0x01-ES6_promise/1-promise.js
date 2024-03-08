/**
 * Return a promise that resolves with an object or rejects with an error
 * @param {boolean} success - Indicates whether the API call is successful
 * @returns {Promise<Object>} A Promise that resolves with an object or rejects with an error
 */
const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
};

export default getFullResponseFromAPI;
