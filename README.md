# Real-time Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express, React, and Node.js).

## Features
- User registration and login with JWT-based authentication.
- Real-time messaging using Socket.io.
- Online user presence indicator.
- Chat history stored in MongoDB.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd realtime-chat-app
   ```

2. Install dependencies for the server:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory with the following contents:
     ```
     MONGO_URI=mongodb://localhost:27017/realtime-chat
     JWT_SECRET=your_jwt_secret
     ```

5. Run the backend server:
   ```bash
   cd ../server
   npm run start
   ```

6. Run the frontend:
   ```bash
   cd ../client
   npm start
   ```

## Bonus Features
- Typing indicator.
- Media message support (image upload).
- Message read receipts.
