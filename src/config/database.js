const mysql = require('mysql2/promise');

const poolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Cloud Run connection
if (process.env.INSTANCE_CONNECTION_NAME) {
  poolConfig.socketPath =
    `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
} else {
  // Local development connection
  poolConfig.host = process.env.DB_HOST || '127.0.0.1';
  poolConfig.port = process.env.DB_PORT || 3306;

  poolConfig.ssl = {
    rejectUnauthorized: false
  };
}

const pool = mysql.createPool(poolConfig);

module.exports = pool;