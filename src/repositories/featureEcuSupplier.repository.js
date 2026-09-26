const pool = require('../config/database');

async function createFeatureEcuSupplier(
  modelFeatureId,
  ecuSupplierId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO feature_ecu_suppliers
      (
        model_feature_id,
        ecu_supplier_id,
        created_user_id
      )
     VALUES (?, ?, ?)`,
    [
      modelFeatureId,
      ecuSupplierId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllFeatureEcuSuppliers() {
  const [rows] = await pool.query(`
    SELECT
      fes.id,

      fes.model_feature_id,

      mf.model_id,
      vm.model_name,

      mf.feature_id,
      f.feature_name,

      fes.ecu_supplier_id,

      es.ecu_id,
      e.name AS ecu_name,

      es.supplier_id,
      s.supplier_name,

      fes.created_user_id,
      u.name AS created_by

    FROM feature_ecu_suppliers fes

    JOIN model_features mf
      ON fes.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN ecu_suppliers es
      ON fes.ecu_supplier_id = es.id

    JOIN ecus e
      ON es.ecu_id = e.id

    JOIN suppliers s
      ON es.supplier_id = s.id

    JOIN users u
      ON fes.created_user_id = u.id

    ORDER BY fes.id DESC
  `);

  return rows;
}

async function getFeatureEcuSupplierById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      fes.id,

      fes.model_feature_id,

      mf.model_id,
      vm.model_name,

      mf.feature_id,
      f.feature_name,

      fes.ecu_supplier_id,

      es.ecu_id,
      e.name AS ecu_name,

      es.supplier_id,
      s.supplier_name,

      fes.created_user_id,
      u.name AS created_by

    FROM feature_ecu_suppliers fes

    JOIN model_features mf
      ON fes.model_feature_id = mf.id

    JOIN vehicle_models vm
      ON mf.model_id = vm.id

    JOIN features f
      ON mf.feature_id = f.id

    JOIN ecu_suppliers es
      ON fes.ecu_supplier_id = es.id

    JOIN ecus e
      ON es.ecu_id = e.id

    JOIN suppliers s
      ON es.supplier_id = s.id

    JOIN users u
      ON fes.created_user_id = u.id

    WHERE fes.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateFeatureEcuSupplier(
  id,
  modelFeatureId,
  ecuSupplierId
) {
  const [result] = await pool.query(
    `UPDATE feature_ecu_suppliers
     SET model_feature_id = ?,
         ecu_supplier_id = ?
     WHERE id = ?`,
    [
      modelFeatureId,
      ecuSupplierId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteFeatureEcuSupplier(id) {
  const [result] = await pool.query(
    `DELETE FROM feature_ecu_suppliers
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createFeatureEcuSupplier,
  getAllFeatureEcuSuppliers,
  getFeatureEcuSupplierById,
  updateFeatureEcuSupplier,
  deleteFeatureEcuSupplier
};