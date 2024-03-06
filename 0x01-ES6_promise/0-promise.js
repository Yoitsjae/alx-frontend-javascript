export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous operation here
    // For demonstration purposes, resolve with a dummy response after a timeout
    setTimeout(() => {
      resolve("Dummy API response");
    }, 1000);
  });
}
