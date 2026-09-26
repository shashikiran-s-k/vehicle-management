const pool = require('../config/database');

async function createFeatureUser(
  modelFeatureId,
  userId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO feature_users
      (
        model_feature_id,
        user_id,
        assigned_date,
        created_user_id
      )
     VALUES (?, ?, NOW(), ?)`,
    [
      modelFeatureId,
      userId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllFeatureUsers() {
  const [rows] = await pool.query(`
    SELECT
      fu.id,
      fu.model_feature_id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,

      fu.user_id,
      assigned_user.name AS assigned_user,

      fu.assigned_date,

      fu.created_user_id,
      created_user.name AS created_by

    FROM feature_users fu

    JOIN model_features mf
      ON fu.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN users assigned_user
      ON fu.user_id = assigned_user.id

    JOIN users created_user
      ON fu.created_user_id = created_user.id

    ORDER BY fu.id DESC
  `);

  return rows;
}

async function getFeatureUserById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      fu.id,
      fu.model_feature_id,
      mf.model_id,
      vm.model_name,
      mf.feature_id,
      f.feature_name,

      fu.user_id,
      assigned_user.name AS assigned_user,

      fu.assigned_date,

      fu.created_user_id,
      created_user.name AS created_by

    FROM feature_users fu

    JOIN model_features mf
      ON fu.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN users assigned_user
      ON fu.user_id = assigned_user.id

    JOIN users created_user
      ON fu.created_user_id = created_user.id

    WHERE fu.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateFeatureUser(
  id,
  modelFeatureId,
  userId
) {
  const [result] = await pool.query(
    `UPDATE feature_users
     SET model_feature_id = ?,
         user_id = ?,
         assigned_date = NOW()
     WHERE id = ?`,
    [
      modelFeatureId,
      userId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteFeatureUser(id) {
  const [result] = await pool.query(
    `DELETE FROM feature_users
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createFeatureUser,
  getAllFeatureUsers,
  getFeatureUserById,
  updateFeatureUser,
  deleteFeatureUser
};