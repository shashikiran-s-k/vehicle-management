const pool = require('../config/database');

async function createModelFeature(
  modelId,
  featureId,
  status,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO model_features
      (
        model_id,
        feature_id,
        status,
        updated_date,
        created_user_id
      )
     VALUES (?, ?, ?, NOW(), ?)`,
    [
      modelId,
      featureId,
      status,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllModelFeatures() {
  const [rows] = await pool.query(`
    SELECT
      mf.id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,
      mf.status,
      mf.updated_date,
      mf.created_user_id,
      u.name AS created_by
    FROM model_features mf
    JOIN vehicle_models vm
      ON mf.model_id = vm.id
    JOIN features f
      ON mf.feature_id = f.id
    JOIN users u
      ON mf.created_user_id = u.id
    ORDER BY mf.id DESC
  `);

  return rows;
}

async function getModelFeatureById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      mf.id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,
      mf.status,
      mf.updated_date,
      mf.created_user_id,
      u.name AS created_by
    FROM model_features mf
    JOIN vehicle_models vm
      ON mf.model_id = vm.id
    JOIN features f
      ON mf.feature_id = f.id
    JOIN users u
      ON mf.created_user_id = u.id
    WHERE mf.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateModelFeature(
  id,
  modelId,
  featureId,
  status
) {
  const [result] = await pool.query(
    `UPDATE model_features
     SET model_id = ?,
         feature_id = ?,
         status = ?,
         updated_date = NOW()
     WHERE id = ?`,
    [
      modelId,
      featureId,
      status,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteModelFeature(id) {
  const [result] = await pool.query(
    `DELETE FROM model_features
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createModelFeature,
  getAllModelFeatures,
  getModelFeatureById,
  updateModelFeature,
  deleteModelFeature
};