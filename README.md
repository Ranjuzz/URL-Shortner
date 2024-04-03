# URL Shortener

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Dependencies](#dependencies)
4. [Contributing](#contributing)
5. [License](#license)

## Installation <a name="installation"></a>

**1. Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

**2. Install the Dependencies:**
   
   ```cmd
   npm install
   ```

**3. Set up environment variables**

   Create a `.env` file in the root directory of the project and add the following variables:
  
   ```plaintext
   PORT=3000
   DATABASE_URL=<your-mongodb-connection-string>
   ```

   Replace `<your-mongodb-connection-string>` with your MongoDB connection string.
   
**4. Strat the server:**
  
   ```
   npm start
   ```

## Usage <a name="usage"></a>

1.  Access the application in your web browser at `http://localhost:3000`.
2.  Enter a full URL in the provided input field and click the "Shrink" button to generate a shortened URL.
3.  The shortened URL will be displayed in the table along with the original URL and the number of clicks.
4.  Click on the shortened URL to be redirected to the original URL.

## Dependencies <a name="dependencies"></a>

*   [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
*   [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment.
*   [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.

## Contributing <a name="contributing"></a>

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, feature requests, or suggestions.

## License <a name="license"></a>
This project is licensed under the MIT License.




  
