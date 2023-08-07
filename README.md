# Authentication using MongoDB, Express.js, and Node.js

This project implements user authentication functionalities (signup, signin, userinfo, logout) using MongoDB for data storage, Express.js for routing, and Node.js for the backend logic. It provides a RESTful API for user authentication and management.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)


## Project Structure

The project follows a typical Express.js project structure:

- `app.js`: Main application file that sets up the Express server.
- `routes/`: Contains route handlers for different API endpoints.
- `controllers/`: Implements the logic for handling various actions.
- `models/`: Defines the MongoDB schema and interacts with the database.
- `middlewares/`: Custom middlewares for authentication and error handling.
- `config/`: Configuration files, such as database connection and environment variables.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd authentication-project`
3. Install dependencies: `npm install`
4. Configure MongoDB connection by modifying `config/database.js`.
5. Set up environment variables in a `.env` file (if necessary).
6. Start the server: `npm start`
7. The server will run on `http://localhost:3000`.

## API Endpoints

- **Signup**: `/signup`
  - Method: POST
  - Request Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: `{ "message": "User registered successfully" }`

- **Signin**: `/signin`
  - Method: POST
  - Request Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: `{ "token": "your-jwt-token" }`

- **User Info**: `/userinfo`
  - Method: GET
  - Requires Authorization Header: `Authorization: Bearer your-jwt-token`
  - Response: `{ "email": "user@example.com" }`

- **Logout**: `/logout`
  - Method: POST
  - Requires Authorization Header: `Authorization: Bearer your-jwt-token`
  - Response: `{ "message": "Logout successful" }`

## Testing with Postman

1. Install and open Postman.
2. Set the API endpoint URLs based on the paths mentioned above.
3. For signup and signin, send POST requests with appropriate request bodies.
4. For userinfo and logout, send GET and POST requests respectively, with the JWT token in the `Authorization` header.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in the CONTRIBUTING.md file.


