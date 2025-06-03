# Modern Blog Application

A full-stack blog application built with React, Node.js, and MongoDB, featuring user authentication, real-time updates, and a modern UI design.

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
│   ├── public/            # Static files
│   ├── src/              # Source files
│   ├── tailwind.config.js # Tailwind configuration
│   └── vite.config.js    # Vite configuration
│
├── backend/               # Backend Node.js application
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── lib/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
cd blog-app
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
npm run dev

# Start frontend server (from client directory)
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret_key
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 📝 API Documentation

The API documentation is available at `/api-docs` when running the backend server.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Clerk for authentication services
- MongoDB for database services
- All other open-source contributors 