const pool = require('../config/database');

async function createReleaseRequirementUpdate(
  releaseId,
  requirementId,
  status,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO release_requirement_update
      (
        release_id,
        requirement_id,
        status,
        created_user_id
      )
     VALUES (?, ?, ?, ?)`,
    [
      releaseId,
      requirementId,
      status,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllReleaseRequirementUpdates() {
  const [rows] = await pool.query(`
    SELECT
      rru.id,

      rru.release_id,
      esr.version_number AS release_version,

      rru.requirement_id,
      fr.requirement,

      rru.status,

      rru.created_user_id,
      u.name AS created_by

    FROM release_requirement_update rru

    JOIN ecu_supplier_releases esr
      ON rru.release_id = esr.id

    JOIN feature_requirements fr
      ON rru.requirement_id = fr.id

    JOIN users u
      ON rru.created_user_id = u.id

    ORDER BY rru.id DESC
  `);

  return rows;
}

async function getReleaseRequirementUpdateById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      rru.id,

      rru.release_id,
      esr.version_number AS release_version,

      rru.requirement_id,
      fr.requirement,

      rru.status,

      rru.created_user_id,
      u.name AS created_by

    FROM release_requirement_update rru

    JOIN ecu_supplier_releases esr
      ON rru.release_id = esr.id

    JOIN feature_requirements fr
      ON rru.requirement_id = fr.id

    JOIN users u
      ON rru.created_user_id = u.id

    WHERE rru.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateReleaseRequirementUpdate(
  id,
  releaseId,
  requirementId,
  status
) {
  const [result] = await pool.query(
    `UPDATE release_requirement_update
     SET release_id = ?,
         requirement_id = ?,
         status = ?
     WHERE id = ?`,
    [
      releaseId,
      requirementId,
      status,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteReleaseRequirementUpdate(id) {
  const [result] = await pool.query(
    `DELETE FROM release_requirement_update
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createReleaseRequirementUpdate,
  getAllReleaseRequirementUpdates,
  getReleaseRequirementUpdateById,
  updateReleaseRequirementUpdate,
  deleteReleaseRequirementUpdate
};