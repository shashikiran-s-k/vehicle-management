const repository =
  require('../repositories/modelFeature.repository');

const pool = require('../config/database');

async function createModelFeature(
  modelId,
  featureId,
  status,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const [models] = await pool.query(
    'SELECT id FROM vehicle_models WHERE id = ?',
    [modelId]
  );

  if (models.length === 0) {
    throw new Error('Vehicle model not found');
  }

  const [features] = await pool.query(
    'SELECT id FROM features WHERE id = ?',
    [featureId]
  );

  if (features.length === 0) {
    throw new Error('Feature not found');
  }

  return repository.createModelFeature(
    modelId,
    featureId,
    status,
    createdUserId
  );
}

async function getAllModelFeatures() {
  return repository.getAllModelFeatures();
}

async function getModelFeatureById(id) {
  return repository.getModelFeatureById(id);
}

async function updateModelFeature(
  id,
  modelId,
  featureId,
  status
) {
  const [models] = await pool.query(
    'SELECT id FROM vehicle_models WHERE id = ?',
    [modelId]
  );

  if (models.length === 0) {
    throw new Error('Vehicle model not found');
  }

  const [features] = await pool.query(
    'SELECT id FROM features WHERE id = ?',
    [featureId]
  );

  if (features.length === 0) {
    throw new Error('Feature not found');
  }

  return repository.updateModelFeature(
    id,
    modelId,
    featureId,
    status
  );
}

async function deleteModelFeature(id) {
  return repository.deleteModelFeature(id);
}

module.exports = {
  createModelFeature,
  getAllModelFeatures,
  getModelFeatureById,
  updateModelFeature,
  deleteModelFeature
};