const repository =
  require('../repositories/featureEcuSupplier.repository');

const pool = require('../config/database');

async function createFeatureEcuSupplier(
  modelFeatureId,
  ecuSupplierId,
  createdUserId
) {
  const [users] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  const [ecuSuppliers] = await pool.query(
    'SELECT id FROM ecu_suppliers WHERE id = ?',
    [ecuSupplierId]
  );

  if (ecuSuppliers.length === 0) {
    throw new Error('ECU supplier not found');
  }

  return repository.createFeatureEcuSupplier(
    modelFeatureId,
    ecuSupplierId,
    createdUserId
  );
}

async function getAllFeatureEcuSuppliers() {
  return repository.getAllFeatureEcuSuppliers();
}

async function getFeatureEcuSupplierById(id) {
  return repository.getFeatureEcuSupplierById(id);
}

async function updateFeatureEcuSupplier(
  id,
  modelFeatureId,
  ecuSupplierId
) {
  const [modelFeatures] = await pool.query(
    'SELECT id FROM model_features WHERE id = ?',
    [modelFeatureId]
  );

  if (modelFeatures.length === 0) {
    throw new Error('Model feature not found');
  }

  const [ecuSuppliers] = await pool.query(
    'SELECT id FROM ecu_suppliers WHERE id = ?',
    [ecuSupplierId]
  );

  if (ecuSuppliers.length === 0) {
    throw new Error('ECU supplier not found');
  }

  return repository.updateFeatureEcuSupplier(
    id,
    modelFeatureId,
    ecuSupplierId
  );
}

async function deleteFeatureEcuSupplier(id) {
  return repository.deleteFeatureEcuSupplier(id);
}

module.exports = {
  createFeatureEcuSupplier,
  getAllFeatureEcuSuppliers,
  getFeatureEcuSupplierById,
  updateFeatureEcuSupplier,
  deleteFeatureEcuSupplier
};