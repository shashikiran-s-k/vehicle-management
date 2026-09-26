const pool = require('../config/database');

async function createRequirementTestcase(
  testcase,
  requirementId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO requirement_testcases
      (
        testcase,
        requirement_id,
        created_date,
        created_user_id
      )
     VALUES (?, ?, NOW(), ?)`,
    [
      testcase,
      requirementId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllRequirementTestcases() {
  const [rows] = await pool.query(`
    SELECT
      rt.id,
      rt.testcase,
      rt.requirement_id,
      fr.requirement,
      rt.created_date,
      rt.created_user_id,
      u.name AS created_by
    FROM requirement_testcases rt

    JOIN feature_requirements fr
      ON rt.requirement_id = fr.id

    JOIN users u
      ON rt.created_user_id = u.id

    ORDER BY rt.id DESC
  `);

  return rows;
}

async function getRequirementTestcaseById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      rt.id,
      rt.testcase,
      rt.requirement_id,
      fr.requirement,
      rt.created_date,
      rt.created_user_id,
      u.name AS created_by
    FROM requirement_testcases rt

    JOIN feature_requirements fr
      ON rt.requirement_id = fr.id

    JOIN users u
      ON rt.created_user_id = u.id

    WHERE rt.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateRequirementTestcase(
  id,
  testcase,
  requirementId
) {
  const [result] = await pool.query(
    `UPDATE requirement_testcases
     SET testcase = ?,
         requirement_id = ?
     WHERE id = ?`,
    [
      testcase,
      requirementId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteRequirementTestcase(id) {
  const [result] = await pool.query(
    `DELETE FROM requirement_testcases
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createRequirementTestcase,
  getAllRequirementTestcases,
  getRequirementTestcaseById,
  updateRequirementTestcase,
  deleteRequirementTestcase
};