const repository = require('../repositories/vehicleModel.repository');
const pool = require('../config/database');

async function createVehicleModel(
  modelName,
  vehicleType,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createVehicleModel(
    modelName,
    vehicleType,
    createdUserId
  );
}

async function getAllVehicleModels() {
  return repository.getAllVehicleModels();
}

async function getVehicleModelById(id) {
  return repository.getVehicleModelById(id);
}

async function updateVehicleModel(
  id,
  modelName,
  vehicleType
) {
  return repository.updateVehicleModel(
    id,
    modelName,
    vehicleType
  );
}

async function deleteVehicleModel(id) {
  return repository.deleteVehicleModel(id);
}

module.exports = {
  createVehicleModel,
  getAllVehicleModels,
  getVehicleModelById,
  updateVehicleModel,
  deleteVehicleModel
};