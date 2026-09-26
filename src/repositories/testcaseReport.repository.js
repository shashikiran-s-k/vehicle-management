const pool = require('../config/database');

async function createTestcaseReport(
  testcaseId,
  releaseId,
  comment,
  status,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO testcase_report
      (
        testcase_id,
        release_id,
        comment,
        status,
        created_date,
        created_user_id
      )
     VALUES (?, ?, ?, ?, NOW(), ?)`,
    [
      testcaseId,
      releaseId,
      comment,
      status,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllTestcaseReports() {
  const [rows] = await pool.query(`
    SELECT
      tr.id,

      tr.testcase_id,
      rt.testcase,

      tr.release_id,
      esr.version_number AS release_version,

      tr.comment,
      tr.status,
      tr.created_date,

      tr.created_user_id,
      u.name AS created_by

    FROM testcase_report tr

    JOIN requirement_testcases rt
      ON tr.testcase_id = rt.id

    JOIN ecu_supplier_releases esr
      ON tr.release_id = esr.id

    JOIN users u
      ON tr.created_user_id = u.id

    ORDER BY tr.id DESC
  `);

  return rows;
}

async function getTestcaseReportById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      tr.id,

      tr.testcase_id,
      rt.testcase,

      tr.release_id,
      esr.version_number AS release_version,

      tr.comment,
      tr.status,
      tr.created_date,

      tr.created_user_id,
      u.name AS created_by

    FROM testcase_report tr

    JOIN requirement_testcases rt
      ON tr.testcase_id = rt.id

    JOIN ecu_supplier_releases esr
      ON tr.release_id = esr.id

    JOIN users u
      ON tr.created_user_id = u.id

    WHERE tr.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateTestcaseReport(
  id,
  testcaseId,
  releaseId,
  comment,
  status
) {
  const [result] = await pool.query(
    `UPDATE testcase_report
     SET testcase_id = ?,
         release_id = ?,
         comment = ?,
         status = ?
     WHERE id = ?`,
    [
      testcaseId,
      releaseId,
      comment,
      status,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteTestcaseReport(id) {
  const [result] = await pool.query(
    `DELETE FROM testcase_report
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createTestcaseReport,
  getAllTestcaseReports,
  getTestcaseReportById,
  updateTestcaseReport,
  deleteTestcaseReport
};