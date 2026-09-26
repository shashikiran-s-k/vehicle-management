const repository =
  require('../repositories/testcaseReport.repository');

const pool = require('../config/database');

async function createTestcaseReport(
  testcaseId,
  releaseId,
  comment,
  status,
  createdUserId
) {
  // Check testcase exists
  const [testcases] = await pool.query(
    'SELECT id FROM requirement_testcases WHERE id = ?',
    [testcaseId]
  );

  if (testcases.length === 0) {
    throw new Error('Testcase not found');
  }

  // Check release exists
  const [releases] = await pool.query(
    'SELECT id FROM ecu_supplier_releases WHERE id = ?',
    [releaseId]
  );

  if (releases.length === 0) {
    throw new Error('Release not found');
  }

  // Check user exists
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createTestcaseReport(
    testcaseId,
    releaseId,
    comment,
    status,
    createdUserId
  );
}

async function getAllTestcaseReports() {
  return repository.getAllTestcaseReports();
}

async function getTestcaseReportById(id) {
  return repository.getTestcaseReportById(id);
}

async function updateTestcaseReport(
  id,
  testcaseId,
  releaseId,
  comment,
  status
) {
  // Check testcase exists
  const [testcases] = await pool.query(
    'SELECT id FROM requirement_testcases WHERE id = ?',
    [testcaseId]
  );

  if (testcases.length === 0) {
    throw new Error('Testcase not found');
  }

  // Check release exists
  const [releases] = await pool.query(
    'SELECT id FROM ecu_supplier_releases WHERE id = ?',
    [releaseId]
  );

  if (releases.length === 0) {
    throw new Error('Release not found');
  }

  return repository.updateTestcaseReport(
    id,
    testcaseId,
    releaseId,
    comment,
    status
  );
}

async function deleteTestcaseReport(id) {
  return repository.deleteTestcaseReport(id);
}

module.exports = {
  createTestcaseReport,
  getAllTestcaseReports,
  getTestcaseReportById,
  updateTestcaseReport,
  deleteTestcaseReport
};