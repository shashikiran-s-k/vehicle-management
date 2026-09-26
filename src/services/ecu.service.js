const repository = require('../repositories/ecu.repository');
const pool = require('../config/database');

async function createEcu(
  name,
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

  return repository.createEcu(
    name,
    description,
    createdUserId
  );
}

async function getAllEcus() {
  return repository.getAllEcus();
}

async function getEcuById(id) {
  return repository.getEcuById(id);
}

async function updateEcu(
  id,
  name,
  description
) {
  return repository.updateEcu(
    id,
    name,
    description
  );
}

async function deleteEcu(id) {
  return repository.deleteEcu(id);
}

module.exports = {
  createEcu,
  getAllEcus,
  getEcuById,
  updateEcu,
  deleteEcu
};