import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
