const repository = require('../repositories/vehicleModel.repository');
const pool = require('../config/database');

async function createVehicleModel(
  modelName,
  vehicleType,
  image_url,
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
    image_url,
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
  image_url,
  vehicleType
) {
  return repository.updateVehicleModel(
    id,
    modelName,
    image_url,
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