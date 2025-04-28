## How to Start

1. Clone the repository
2. Run `npm install` inside the project folder
3. Run `npm run start` to start the server

---

## Project Overview

This is a basic backend project built with Express.js for handling simple user management.

It includes:
- User authentication with JSON Web Tokens (JWT)
- HTTP security enhancements with Helmet
- Request logging with Morgan
- Cross-Origin Resource Sharing (CORS) to restrict allowed origins
- PostgreSQL database for user storage

---

## Technologies Used

- **Express.js** — Web server framework
- **PostgreSQL** — Relational database
- **Docker** — For easy database setup
- **jsonwebtoken** — Authentication with JWT
- **Helmet** — Secure HTTP headers
- **Morgan** — HTTP request logger
- **CORS** — Control API access from frontend

---

## Project Implementation
The project uses Express to implement a basic backend for users, CORS middleware to allow requests only from specific domains, Helmet to secure the HTTP headers, and Morgan to log HTTP requests and JWT middleware to protect specific routes with token verification.

---

## Future Improvements
Find a way to store logs in a DB table, add more CRUDs to manage messages, times and groups.

---

For testing, a Docker container running PostgreSQL was used as the database. 
Below is the SQL schema for the users table.

## Database Schema

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

```
