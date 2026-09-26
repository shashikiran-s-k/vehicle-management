const pool = require('../config/database');

async function createEcuSupplierRelease(
  versionNumber,
  createdUserId,
  status,
  comments
) {
  const [result] = await pool.query(
    `INSERT INTO ecu_supplier_releases
      (
        version_number,
        created_date,
        created_user_id,
        status,
        comments
      )
     VALUES (?, NOW(), ?, ?, ?)`,
    [
      versionNumber,
      createdUserId,
      status,
      comments
    ]
  );

  return result.insertId;
}

async function getAllEcuSupplierReleases() {
  const [rows] = await pool.query(`
    SELECT
      r.id,
      r.version_number,
      r.created_date,
      r.created_user_id,
      u.name AS created_by,
      r.status,
      r.comments
    FROM ecu_supplier_releases r
    JOIN users u
      ON r.created_user_id = u.id
    ORDER BY r.id DESC
  `);

  return rows;
}

async function getEcuSupplierReleaseById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      r.id,
      r.version_number,
      r.created_date,
      r.created_user_id,
      u.name AS created_by,
      r.status,
      r.comments
    FROM ecu_supplier_releases r
    JOIN users u
      ON r.created_user_id = u.id
    WHERE r.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateEcuSupplierRelease(
  id,
  versionNumber,
  status,
  comments
) {
  const [result] = await pool.query(
    `UPDATE ecu_supplier_releases
     SET version_number = ?,
         status = ?,
         comments = ?
     WHERE id = ?`,
    [
      versionNumber,
      status,
      comments,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteEcuSupplierRelease(id) {
  const [result] = await pool.query(
    `DELETE FROM ecu_supplier_releases
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createEcuSupplierRelease,
  getAllEcuSupplierReleases,
  getEcuSupplierReleaseById,
  updateEcuSupplierRelease,
  deleteEcuSupplierRelease
};