export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // Simulate an API call with a delay
      setTimeout(() => {
          // Resolve the Promise with dummy response data
          resolve({ status: 200, data: 'Response from API' });
      }, 1000); // Delay of 1 second (1000 milliseconds)
  });
}

