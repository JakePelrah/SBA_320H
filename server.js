// Import necessary modules
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import cookieParser from 'cookie-parser';

// Import database connection pool
import { pool } from './src/db/index.js';

// Import routers for authentication and scheduling
import { authRouter } from './src/js/auth.js';
import { schedulingRouter } from './src/js/scheduling.js';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the port for the server
const port = 3000;
const app = express();

// Create a PostgreSQL session store using connect-pg-simple
const PgSession = connectPgSimple(session);

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from 'dist'

// Configure session management
app.use(session({
  store: new PgSession({
    pool, // Use the PostgreSQL connection pool
    tableName: 'session', // Specify the session table name
  }),
  secret: process.env.SESSION_SECRET, // Secret for session encryption
  resave: false, // Prevent resaving unchanged sessions
  saveUninitialized: false, // Don't save uninitialized sessions
  cookie: { secure: false } // Set secure cookies (change to true in production)
}));

// Initialize passport session management
app.use(passport.authenticate('session'));

// Middleware to manage session messages
app.use(function(req, res, next) {
  var msgs = req.session.messages || []; // Get messages from session
  res.locals.messages = msgs; // Make messages available to views
  res.locals.hasMessages = !!msgs.length; // Boolean for message existence
  req.session.messages = []; // Clear messages after use
  next(); // Proceed to the next middleware
});

// Set up routers for authentication and scheduling
app.use('/', authRouter);
app.use('/', schedulingRouter);

// Handle client-side routing, returning all requests to the app
app.get('*', (_req, res) => {
  console.log(res.locals); // Log local response variables
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Send index.html for client-side routing
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
