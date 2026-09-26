const repository =
  require('../repositories/featureRequirement.repository');

const pool = require('../config/database');

async function createFeatureRequirement(
  requirement,
  modelFeatureId,
  createdUserId,
  status
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  return repository.createFeatureRequirement(
    requirement,
    modelFeatureId,
    createdUserId,
    status
  );
}

async function getAllFeatureRequirements() {
  return repository.getAllFeatureRequirements();
}

async function getFeatureRequirementById(id) {
  return repository.getFeatureRequirementById(id);
}

async function updateFeatureRequirement(
  id,
  requirement,
  modelFeatureId,
  status
) {
  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  return repository.updateFeatureRequirement(
    id,
    requirement,
    modelFeatureId,
    status
  );
}

async function deleteFeatureRequirement(id) {
  return repository.deleteFeatureRequirement(id);
}

module.exports = {
  createFeatureRequirement,
  getAllFeatureRequirements,
  getFeatureRequirementById,
  updateFeatureRequirement,
  deleteFeatureRequirement
};