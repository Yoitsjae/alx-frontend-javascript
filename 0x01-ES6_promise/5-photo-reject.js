/**
 * Upload a photo and return a rejected promise with an error message
 * @param {string} filename - Name of the file to upload
 * @returns {Promise<Error>} A rejected Promise with an error message
 */
const uploadPhoto = (filename) => {
  return Promise.reject(new Error(`${filename} cannot be processed`));
};

export default uploadPhoto;
