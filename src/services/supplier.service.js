const repository =
  require('../repositories/supplier.repository');

const pool = require('../config/database');

async function createSupplier(
  supplierName,
  description,
  address,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  return repository.createSupplier(
    supplierName,
    description,
    address,
    createdUserId
  );
}

async function getAllSuppliers() {
  return repository.getAllSuppliers();
}

async function getSupplierById(id) {
  return repository.getSupplierById(id);
}

async function updateSupplier(
  id,
  supplierName,
  description,
  address
) {
  return repository.updateSupplier(
    id,
    supplierName,
    description,
    address
  );
}

async function deleteSupplier(id) {
  return repository.deleteSupplier(id);
}

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};