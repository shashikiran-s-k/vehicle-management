const pool = require('../config/database');

async function createEcu(
  name,
  description,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO ecus
      (name, description, created_at, created_user_id)
     VALUES (?, ?, NOW(), ?)`,
    [name, description, createdUserId]
  );

  return result.insertId;
}

async function getAllEcus() {
  const [rows] = await pool.query(`
    SELECT
      e.id,
      e.name,
      e.description,
      e.created_at,
      e.created_user_id,
      u.name AS created_by
    FROM ecus e
    JOIN users u
      ON e.created_user_id = u.id
    ORDER BY e.id DESC
  `);

  return rows;
}

async function getEcuById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      e.id,
      e.name,
      e.description,
      e.created_at,
      e.created_user_id,
      u.name AS created_by
    FROM ecus e
    JOIN users u
      ON e.created_user_id = u.id
    WHERE e.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateEcu(
  id,
  name,
  description
) {
  const [result] = await pool.query(
    `UPDATE ecus
     SET name = ?,
         description = ?
     WHERE id = ?`,
    [name, description, id]
  );

  return result.affectedRows;
}

async function deleteEcu(id) {
  const [result] = await pool.query(
    `DELETE FROM ecus
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createEcu,
  getAllEcus,
  getEcuById,
  updateEcu,
  deleteEcu
};