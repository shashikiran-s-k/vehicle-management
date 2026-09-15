const pool = require('../config/database');

async function createUser(name, email, role) {
  const [result] = await pool.query(
    `INSERT INTO users (name, email_id, role)
     VALUES (?, ?, ?)`,
    [name, email, role]
  );

  return result.insertId;
}

module.exports = {
  createUser
};