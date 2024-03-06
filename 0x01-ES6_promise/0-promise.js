export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // Simulating API call
      setTimeout(() => {
          // Assuming successful response
          resolve("Successful response from API");
      }, 2000); // Simulating delay of 2 seconds
  });
}
