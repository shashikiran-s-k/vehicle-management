const pool = require('../config/database');

async function createSupplier(
  supplierName,
  description,
  address,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO suppliers
      (
        supplier_name,
        description,
        address,
        created_at,
        created_user_id
      )
     VALUES (?, ?, ?, NOW(), ?)`,
    [
      supplierName,
      description,
      address,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllSuppliers() {
  const [rows] = await pool.query(`
    SELECT
      s.id,
      s.supplier_name,
      s.description,
      s.address,
      s.created_at,
      s.created_user_id,
      u.name AS created_by
    FROM suppliers s
    JOIN users u
      ON s.created_user_id = u.id
    ORDER BY s.id DESC
  `);

  return rows;
}

async function getSupplierById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      s.id,
      s.supplier_name,
      s.description,
      s.address,
      s.created_at,
      s.created_user_id,
      u.name AS created_by
    FROM suppliers s
    JOIN users u
      ON s.created_user_id = u.id
    WHERE s.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateSupplier(
  id,
  supplierName,
  description,
  address
) {
  const [result] = await pool.query(
    `UPDATE suppliers
     SET supplier_name = ?,
         description = ?,
         address = ?
     WHERE id = ?`,
    [
      supplierName,
      description,
      address,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteSupplier(id) {
  const [result] = await pool.query(
    `DELETE FROM suppliers
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};