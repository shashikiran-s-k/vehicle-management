const pool = require('../config/database');

async function createFeature(
  featureName,
  description,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO features
      (feature_name, description, created_date, created_user_id)
     VALUES (?, ?, NOW(), ?)`,
    [featureName, description, createdUserId]
  );

  return result.insertId;
}

async function getAllFeatures() {
  const [rows] = await pool.query(`
    SELECT
      f.id,
      f.feature_name,
      f.description,
      f.created_date,
      f.created_user_id,
      u.name AS created_by
    FROM features f
    JOIN users u
      ON f.created_user_id = u.id
    ORDER BY f.id DESC
  `);

  return rows;
}

async function getFeatureById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      f.id,
      f.feature_name,
      f.description,
      f.created_date,
      f.created_user_id,
      u.name AS created_by
    FROM features f
    JOIN users u
      ON f.created_user_id = u.id
    WHERE f.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateFeature(
  id,
  featureName,
  description
) {
  const [result] = await pool.query(
    `UPDATE features
     SET feature_name = ?,
         description = ?
     WHERE id = ?`,
    [featureName, description, id]
  );

  return result.affectedRows;
}

async function deleteFeature(id) {
  const [result] = await pool.query(
    `DELETE FROM features
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature
};