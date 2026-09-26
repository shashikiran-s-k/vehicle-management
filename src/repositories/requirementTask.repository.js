const pool = require('../config/database');

async function createRequirementTask(
  requirementId,
  taskName,
  status,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO requirement_tasks
      (
        requirement_id,
        task_name,
        status,
        created_user_id,
        created_date
      )
     VALUES (?, ?, ?, ?, NOW())`,
    [
      requirementId,
      taskName,
      status,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllRequirementTasks() {
  const [rows] = await pool.query(`
    SELECT
      rt.id,
      rt.requirement_id,
      fr.requirement,

      rt.task_name,
      rt.status,

      rt.created_user_id,
      u.name AS created_by,

      rt.created_date

    FROM requirement_tasks rt

    JOIN feature_requirements fr
      ON rt.requirement_id = fr.id

    JOIN users u
      ON rt.created_user_id = u.id

    ORDER BY rt.id DESC
  `);

  return rows;
}

async function getRequirementTaskById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      rt.id,
      rt.requirement_id,
      fr.requirement,

      rt.task_name,
      rt.status,

      rt.created_user_id,
      u.name AS created_by,

      rt.created_date

    FROM requirement_tasks rt

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

async function updateRequirementTask(
  id,
  requirementId,
  taskName,
  status
) {
  const [result] = await pool.query(
    `UPDATE requirement_tasks
     SET requirement_id = ?,
         task_name = ?,
         status = ?
     WHERE id = ?`,
    [
      requirementId,
      taskName,
      status,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteRequirementTask(id) {
  const [result] = await pool.query(
    `DELETE FROM requirement_tasks
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createRequirementTask,
  getAllRequirementTasks,
  getRequirementTaskById,
  updateRequirementTask,
  deleteRequirementTask
};