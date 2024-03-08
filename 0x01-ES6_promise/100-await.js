import { uploadPhoto, createUser } from './utils';

/**
 * Async function to upload a user with photo and create a user
 * @returns {Promise<Object>} Object containing photo and user details
 */
const asyncUploadUser = async () => {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
