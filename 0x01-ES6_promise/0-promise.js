export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      // Simulating API call
      const apiResponse = {
          status: 200,
          message: "Success",
          data: {
              id: 1,
              name: "John Doe",
              email: "john@example.com"
          }
      };

      // Simulating delay of 2 seconds
      setTimeout(() => {
          // Assuming successful response
          resolve(apiResponse);
          
          // Uncomment the below line to simulate a failed response
          // reject("Failed to fetch data from API");
      }, 2000);
  });
}
