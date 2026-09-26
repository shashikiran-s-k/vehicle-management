const repository =
  require('../repositories/ecuSupplierRelease.repository');

const pool = require('../config/database');

async function createEcuSupplierRelease(
  versionNumber,
  createdUserId,
  status,
  comments
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createEcuSupplierRelease(
    versionNumber,
    createdUserId,
    status,
    comments
  );
}

async function getAllEcuSupplierReleases() {
  return repository.getAllEcuSupplierReleases();
}

async function getEcuSupplierReleaseById(id) {
  return repository.getEcuSupplierReleaseById(id);
}

async function updateEcuSupplierRelease(
  id,
  versionNumber,
  status,
  comments
) {
  return repository.updateEcuSupplierRelease(
    id,
    versionNumber,
    status,
    comments
  );
}

async function deleteEcuSupplierRelease(id) {
  return repository.deleteEcuSupplierRelease(id);
}

module.exports = {
  createEcuSupplierRelease,
  getAllEcuSupplierReleases,
  getEcuSupplierReleaseById,
  updateEcuSupplierRelease,
  deleteEcuSupplierRelease
};