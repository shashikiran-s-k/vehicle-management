const repository =
  require('../repositories/ecuSupplier.repository');

const pool = require('../config/database');

async function createEcuSupplier(
  ecuId,
  supplierId,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const [ecus] = await pool.query(
    'SELECT id FROM ecus WHERE id = ?',
    [ecuId]
  );

  if (ecus.length === 0) {
    throw new Error('ECU not found');
  }

  const [suppliers] = await pool.query(
    'SELECT id FROM suppliers WHERE id = ?',
    [supplierId]
  );

  if (suppliers.length === 0) {
    throw new Error('Supplier not found');
  }

  return repository.createEcuSupplier(
    ecuId,
    supplierId,
    createdUserId
  );
}

async function getAllEcuSuppliers() {
  return repository.getAllEcuSuppliers();
}

async function getEcuSupplierById(id) {
  return repository.getEcuSupplierById(id);
}

async function updateEcuSupplier(
  id,
  ecuId,
  supplierId
) {
  const [ecus] = await pool.query(
    'SELECT id FROM ecus WHERE id = ?',
    [ecuId]
  );

  if (ecus.length === 0) {
    throw new Error('ECU not found');
  }

  const [suppliers] = await pool.query(
    'SELECT id FROM suppliers WHERE id = ?',
    [supplierId]
  );

  if (suppliers.length === 0) {
    throw new Error('Supplier not found');
  }

  return repository.updateEcuSupplier(
    id,
    ecuId,
    supplierId
  );
}

async function deleteEcuSupplier(id) {
  return repository.deleteEcuSupplier(id);
}

module.exports = {
  createEcuSupplier,
  getAllEcuSuppliers,
  getEcuSupplierById,
  updateEcuSupplier,
  deleteEcuSupplier
};