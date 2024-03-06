0x01. ES6 Promises
Description
This project explores ES6 Promises in JavaScript, covering topics such as:

What are Promises and why are they used?
How to use the then, resolve, and catch methods
Utilizing the every method of the Promise object
Error handling with throw and try
Understanding the await operator
Implementing and using async functions
Project Structure
The project consists of the following files:

0-setup.js: Contains setup instructions to install Node.js 12.11.x, Jest, Babel, and ESLint.
1-then.js: Explains how to use the then method of Promises.
2-catch.js: Covers error handling with the catch method.
3-all.js: Demonstrates the usage of the every method of the Promise object.
4-throw_error.js: Illustrates error handling using throw and try.
5-await.js: Introduces the await operator.
6-async.js: Demonstrates how to use an async function.
7-load.js: Contains utility functions for loading data asynchronously.
tests/: Directory containing test files for each JavaScript file.
package.json: File specifying project dependencies and scripts.
babel.config.js: Babel configuration file.
.eslintrc.js: ESLint configuration file.
Setup Instructions
Install Node.js 12.11.x:

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify Node.js and npm installation:

bash
Copy code
node -v
npm -v
Install project dependencies:

bash
Copy code
npm install
Testing
To run the tests for this project, use the following command:

bash
Copy code
npm test
Author
[Jae Ncube]