const repository =
  require('../repositories/featureUser.repository');

const pool = require('../config/database');

async function createFeatureUser(
  modelFeatureId,
  userId,
  createdUserId
) {
  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [userId]
  );

  if (users.length === 0) {
    throw new Error('Assigned user not found');
  }

  const [createdUsers] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (createdUsers.length === 0) {
    throw new Error('Created user not found');
  }

  return repository.createFeatureUser(
    modelFeatureId,
    userId,
    createdUserId
  );
}

async function getAllFeatureUsers() {
  return repository.getAllFeatureUsers();
}

async function getFeatureUserById(id) {
  return repository.getFeatureUserById(id);
}

async function updateFeatureUser(
  id,
  modelFeatureId,
  userId
) {
  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [userId]
  );

  if (users.length === 0) {
    throw new Error('Assigned user not found');
  }

  return repository.updateFeatureUser(
    id,
    modelFeatureId,
    userId
  );
}

async function deleteFeatureUser(id) {
  return repository.deleteFeatureUser(id);
}

module.exports = {
  createFeatureUser,
  getAllFeatureUsers,
  getFeatureUserById,
  updateFeatureUser,
  deleteFeatureUser
};