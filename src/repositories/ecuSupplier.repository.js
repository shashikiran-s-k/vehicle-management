const pool = require('../config/database');

async function createEcuSupplier(
  ecuId,
  supplierId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO ecu_suppliers
      (
        ecu_id,
        supplier_id,
        updated_at,
        created_user_id
      )
     VALUES (?, ?, NOW(), ?)`,
    [
      ecuId,
      supplierId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllEcuSuppliers() {
  const [rows] = await pool.query(`
    SELECT
      es.id,
      es.ecu_id,
      e.name AS ecu_name,
      es.supplier_id,
      s.supplier_name,
      es.updated_at,
      es.created_user_id,
      u.name AS created_by
    FROM ecu_suppliers es
    JOIN ecus e
      ON es.ecu_id = e.id
    JOIN suppliers s
      ON es.supplier_id = s.id
    JOIN users u
      ON es.created_user_id = u.id
    ORDER BY es.id DESC
  `);

  return rows;
}

async function getEcuSupplierById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      es.id,
      es.ecu_id,
      e.name AS ecu_name,
      es.supplier_id,
      s.supplier_name,
      es.updated_at,
      es.created_user_id,
      u.name AS created_by
    FROM ecu_suppliers es
    JOIN ecus e
      ON es.ecu_id = e.id
    JOIN suppliers s
      ON es.supplier_id = s.id
    JOIN users u
      ON es.created_user_id = u.id
    WHERE es.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateEcuSupplier(
  id,
  ecuId,
  supplierId
) {
  const [result] = await pool.query(
    `UPDATE ecu_suppliers
     SET ecu_id = ?,
         supplier_id = ?,
         updated_at = NOW()
     WHERE id = ?`,
    [
      ecuId,
      supplierId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteEcuSupplier(id) {
  const [result] = await pool.query(
    `DELETE FROM ecu_suppliers
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createEcuSupplier,
  getAllEcuSuppliers,
  getEcuSupplierById,
  updateEcuSupplier,
  deleteEcuSupplier
};