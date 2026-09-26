const repository = require('../repositories/feature.repository');
const pool = require('../config/database');

async function createFeature(
  featureName,
  description,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createFeature(
    featureName,
    description,
    createdUserId
  );
}

async function getAllFeatures() {
  return repository.getAllFeatures();
}

async function getFeatureById(id) {
  return repository.getFeatureById(id);
}

async function updateFeature(
  id,
  featureName,
  description
) {
  return repository.updateFeature(
    id,
    featureName,
    description
  );
}

async function deleteFeature(id) {
  return repository.deleteFeature(id);
}

module.exports = {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature
};