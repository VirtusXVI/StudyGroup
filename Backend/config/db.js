import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DEBUG_DB_HOST,
  user: process.env.DEBUG_DB_USER,
  password: process.env.DEBUG_DB_PASS,
  database: process.env.DEBUG_DB_NAME,
  port: process.env.DEBUG_DB_PORT,
});

export default pool;