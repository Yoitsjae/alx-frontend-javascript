// Define a function named getFullResponseFromAPI
// It returns a promise that resolves with a success object if success is true, otherwise rejects with an error message
const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Resolve with success object
    } else {
      reject(Error('Sorry, the API is currently unavailable')); // Reject with error message
    }
  });
};

// Export the getFullResponseFromAPI function as default
export default getFullResponseFromAPI;
