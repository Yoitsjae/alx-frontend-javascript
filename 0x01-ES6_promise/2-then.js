/**
 * Handle the response from the API Promise
 * @param {Promise} promise - A Promise object
 */
const handleResponseFromAPI = (promise) => {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
};

export default handleResponseFromAPI;
