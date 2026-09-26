const repository =
  require('../repositories/requirementTask.repository');

const pool = require('../config/database');

async function createRequirementTask(
  requirementId,
  taskName,
  status,
  createdUserId
) {
  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createRequirementTask(
    requirementId,
    taskName,
    status,
    createdUserId
  );
}

async function getAllRequirementTasks() {
  return repository.getAllRequirementTasks();
}

async function getRequirementTaskById(id) {
  return repository.getRequirementTaskById(id);
}

async function updateRequirementTask(
  id,
  requirementId,
  taskName,
  status
) {
  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  return repository.updateRequirementTask(
    id,
    requirementId,
    taskName,
    status
  );
}

async function deleteRequirementTask(id) {
  return repository.deleteRequirementTask(id);
}

module.exports = {
  createRequirementTask,
  getAllRequirementTasks,
  getRequirementTaskById,
  updateRequirementTask,
  deleteRequirementTask
};