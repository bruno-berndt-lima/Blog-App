# Blog App

A modern blog application built with React, Node.js, and MongoDB, featuring user authentication, real-time updates, and a beautiful UI design.

## 🚀 Features

- **User Authentication**: Secure user authentication powered by Clerk
- **Modern UI**: Built with React and styled using Tailwind CSS
- **Real-time Updates**: Dynamic content updates using React Query
- **RESTful API**: Clean and efficient backend architecture
- **MongoDB Database**: Robust data storage and management
- **Responsive Design**: Mobile-first approach for optimal viewing on all devices

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- React Query
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Clerk Authentication
- Body Parser

## 📦 Project Structure

```
blog-app/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   ├── tailwind.config.js  # Tailwind configuration
│   └── vite.config.js      # Vite configuration
│
├── backend/                # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── lib/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bruno-berndt-lima/Blog-App.git
cd Blog-App
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables
   - Create `.env` files in both client and backend directories
   - Add necessary environment variables (see .env.example files)

4. Start the development servers
```bash
# Start backend server (from backend directory)
node --env-file .env --watch index.js

# Start frontend server (from client directory)
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```
MONGO=your_mongodb_uri

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_public_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173

IMAGEKIT_URL_ENDPOINT=your_ik_url_endpoint
IMAGEKIT_PUBLIC_KEY=your_ik_public_key
IMAGEKIT_PRIVATE_KEY=your_ik_private_key

```

### Frontend (.env)
```
VITE_API_URL = http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_IMAGEKIT_URL_ENDPOINT=your_ik_url_endpoint
VITE_IMAGEKIT_KEY=your_ik_public_key
```
