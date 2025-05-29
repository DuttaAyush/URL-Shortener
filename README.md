# URL Shortener
A full-stack URL shortening application built with React and Node.js that allows users to create shortened URLs with optional custom slugs.
## Features
- Shorten any URL with a single click- Create custom URL slugs (for registered users)
- User authentication system- Dashboard to view and manage your shortened URLs
- Copy shortened URLs to clipboard- Track URL visit statistics
## Tech Stack
### Frontend
- React with Vite- Redux Toolkit for state management
- React Query for data fetching- Tailwind CSS for styling
- Axios for API requests
### Backend- Node.js with Express
- MongoDB for database- JWT for authentication
- bcrypt for password hashing
## Getting Started
### Prerequisites
- Node.js (v18.0.0 or higher)- MongoDB
### Installation
1. Clone the repository
   ```bash   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener   ```
2. Install dependencies
   ```bash   npm run install:all
   ```
3. Set up environment variables   - Create a `.env` file in the BACKEND directory based on the example below:
   ```   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/url_shortener   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d   APP_URL=http://localhost:5000/
   NANOID_SIZE=7   ```
4. Start the development servers
   ```bash   npm start
   ```   This will start both the frontend and backend servers concurrently.
## Usage
### Shortening a URL
1. Enter the URL you want to shorten in the input field
2. (Optional) If you're logged in, you can specify a custom slug3. Click "Shorten URL"
4. Copy the shortened URL to your clipboard
### User Authentication
- Register a new account to access additional features- Log in to view your dashboard with all your shortened URLs
- Create URLs with custom slugs when logged in
## API Endpoints
### Authentication- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user- `GET /api/auth/logout` - Log out a user
- `GET /api/auth/me` - Get current user information
### URL Shortening- `POST /api/create` - Create a new shortened URL
- `GET /api/urls` - Get all URLs for the logged-in user- `GET /:shortUrl` - Redirect to the original URL
## Deployment
### Frontend
```bashnpm run build
```This will create a production build in the `FRONTEND/dist` directory.
### Backend
For production, set the `NODE_ENV` environment variable to `production`.
## Contributing
1. Fork the repository2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
## License





# URL-Shortener
