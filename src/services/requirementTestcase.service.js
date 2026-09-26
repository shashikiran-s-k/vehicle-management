const repository =
  require('../repositories/requirementTestcase.repository');

const pool = require('../config/database');

async function createRequirementTestcase(
  testcase,
  requirementId,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  return repository.createRequirementTestcase(
    testcase,
    requirementId,
    createdUserId
  );
}

async function getAllRequirementTestcases() {
  return repository.getAllRequirementTestcases();
}

async function getRequirementTestcaseById(id) {
  return repository.getRequirementTestcaseById(id);
}

async function updateRequirementTestcase(
  id,
  testcase,
  requirementId
) {
  const [requirements] = await pool.query(
    'SELECT id FROM feature_requirements WHERE id = ?',
    [requirementId]
  );

  if (requirements.length === 0) {
    throw new Error('Requirement not found');
  }

  return repository.updateRequirementTestcase(
    id,
    testcase,
    requirementId
  );
}

async function deleteRequirementTestcase(id) {
  return repository.deleteRequirementTestcase(id);
}

module.exports = {
  createRequirementTestcase,
  getAllRequirementTestcases,
  getRequirementTestcaseById,
  updateRequirementTestcase,
  deleteRequirementTestcase
};