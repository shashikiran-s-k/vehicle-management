const repository =
  require('../repositories/releaseRequirementUpdate.repository');

const pool = require('../config/database');

async function createReleaseRequirementUpdate(
  releaseId,
  requirementId,
  status,
  createdUserId
) {
  // Check release exists
  const [releases] = await pool.query(
    'SELECT id FROM ecu_supplier_releases WHERE id = ?',
    [releaseId]
  );

  if (releases.length === 0) {
    throw new Error('Release not found');
  }

  // Check requirement exists
  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  // Check user exists
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createReleaseRequirementUpdate(
    releaseId,
    requirementId,
    status,
    createdUserId
  );
}

async function getAllReleaseRequirementUpdates() {
  return repository.getAllReleaseRequirementUpdates();
}

async function getReleaseRequirementUpdateById(id) {
  return repository.getReleaseRequirementUpdateById(id);
}

async function updateReleaseRequirementUpdate(
  id,
  releaseId,
  requirementId,
  status
) {
  // Check release exists
  const [releases] = await pool.query(
    'SELECT id FROM ecu_supplier_releases WHERE id = ?',
    [releaseId]
  );

  if (releases.length === 0) {
    throw new Error('Release not found');
  }

  // Check requirement exists
  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  return repository.updateReleaseRequirementUpdate(
    id,
    releaseId,
    requirementId,
    status
  );
}

async function deleteReleaseRequirementUpdate(id) {
  return repository.deleteReleaseRequirementUpdate(id);
}

module.exports = {
  createReleaseRequirementUpdate,
  getAllReleaseRequirementUpdates,
  getReleaseRequirementUpdateById,
  updateReleaseRequirementUpdate,
  deleteReleaseRequirementUpdate
};