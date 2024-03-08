import { uploadPhoto, createUser } from './utils';

/**
 * Handle profile signup by uploading photo and creating user
 */
const handleProfileSignup = async () => {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};

export default handleProfileSignup;
