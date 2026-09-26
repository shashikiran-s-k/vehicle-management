const pool = require('../config/database');

async function createFeatureRequirement(
  requirement,
  modelFeatureId,
  createdUserId,
  status
) {
  const [result] = await pool.query(
    `INSERT INTO feature_requirements
      (
        requirement,
        model_feature_id,
        created_date,
        created_user_id,
        status
      )
     VALUES (?, ?, NOW(), ?, ?)`,
    [
      requirement,
      modelFeatureId,
      createdUserId,
      status
    ]
  );

  return result.insertId;
}

async function getAllFeatureRequirements() {
  const [rows] = await pool.query(`
    SELECT
      fr.id,
      fr.requirement,
      fr.model_feature_id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,
      fr.created_date,
      fr.created_user_id,
      u.name AS created_by,
      fr.status
    FROM feature_requirements fr

    JOIN model_features mf
      ON fr.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN users u
      ON fr.created_user_id = u.id

    ORDER BY fr.id DESC
  `);

  return rows;
}

async function getFeatureRequirementById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      fr.id,
      fr.requirement,
      fr.model_feature_id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,
      fr.created_date,
      fr.created_user_id,
      u.name AS created_by,
      fr.status
    FROM feature_requirements fr

    JOIN model_features mf
      ON fr.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN users u
      ON fr.created_user_id = u.id

    WHERE fr.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateFeatureRequirement(
  id,
  requirement,
  modelFeatureId,
  status
) {
  const [result] = await pool.query(
    `UPDATE feature_requirements
     SET requirement = ?,
         model_feature_id = ?,
         status = ?
     WHERE id = ?`,
    [
      requirement,
      modelFeatureId,
      status,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteFeatureRequirement(id) {
  const [result] = await pool.query(
    `DELETE FROM feature_requirements
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createFeatureRequirement,
  getAllFeatureRequirements,
  getFeatureRequirementById,
  updateFeatureRequirement,
  deleteFeatureRequirement
};