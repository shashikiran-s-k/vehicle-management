const pool = require('../config/database');

async function createVehicleModel(
  modelName,
  vehicleType,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO vehicle_models
      (model_name, vehicle_type, created_date, created_user_id)
     VALUES (?, ?, NOW(), ?)`,
    [modelName, vehicleType, createdUserId]
  );

  return result.insertId;
}

async function getAllVehicleModels() {
  const [rows] = await pool.query(`
    SELECT
      vm.id,
      vm.model_name,
      vm.vehicle_type,
      vm.created_date,
      vm.created_user_id,
      u.name AS created_by
    FROM vehicle_models vm
    JOIN users u
      ON vm.created_user_id = u.id
    ORDER BY vm.id DESC
  `);

  return rows;
}

async function getVehicleModelById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      vm.id,
      vm.model_name,
      vm.vehicle_type,
      vm.created_date,
      vm.created_user_id,
      u.name AS created_by
    FROM vehicle_models vm
    JOIN users u
      ON vm.created_user_id = u.id
    WHERE vm.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateVehicleModel(
  id,
  modelName,
  vehicleType
) {
  const [result] = await pool.query(
    `UPDATE vehicle_models
     SET model_name = ?,
         vehicle_type = ?
     WHERE id = ?`,
    [modelName, vehicleType, id]
  );

  return result.affectedRows;
}

async function deleteVehicleModel(id) {
  const [result] = await pool.query(
    `DELETE FROM vehicle_models
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createVehicleModel,
  getAllVehicleModels,
  getVehicleModelById,
  updateVehicleModel,
  deleteVehicleModel
};