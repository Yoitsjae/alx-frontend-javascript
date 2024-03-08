import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handle profile signup by signing up user and uploading photo
 * @param {string} firstName - First name of the user
 * @param {string} lastName - Last name of the user
 * @param {string} fileName - Name of the file to upload
 * @returns {Promise<Array>} A Promise that resolves with an array containing the status of each action
 */
const handleProfileSignup = async (firstName, lastName, fileName) => {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName).catch((error) => error),
  ];
  return Promise.allSettled(promises);
};

export default handleProfileSignup;
