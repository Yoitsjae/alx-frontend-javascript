export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Test the function with different values of `success`
const promise1 = getFullResponseFromAPI(true);
promise1.then(response => {
  console.log('Resolved:', response);
}).catch(error => {
  console.error('Rejected:', error);
});

const promise2 = getFullResponseFromAPI(false);
promise2.then(response => {
  console.log('Resolved:', response);
}).catch(error => {
  console.error('Rejected:', error);
});

