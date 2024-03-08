/**
 * Create a Promise that resolves with a response from the API
 * @returns {Promise<Object>} A Promise that resolves with an object
 */
const getResponseFromAPI = () => {
  return new Promise((resolve) => {
    resolve({ status: 200, body: 'Success' });
  });
};

export default getResponseFromAPI;
