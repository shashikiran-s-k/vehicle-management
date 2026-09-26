const pool = require('../config/database');

async function createTaskAssignment(
  requirementTasksId,
  assigneeUserId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO task_assignments
      (
        requirement_tasks_id,
        assignee_user_id,
        created_date,
        created_user_id
      )
     VALUES (?, ?, NOW(), ?)`,
    [
      requirementTasksId,
      assigneeUserId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllTaskAssignments() {
  const [rows] = await pool.query(`
    SELECT
      ta.id,

      ta.requirement_tasks_id,
      rt.task_name,

      ta.assignee_user_id,
      assignee.name AS assignee,

      ta.created_date,

      ta.created_user_id,
      creator.name AS created_by

    FROM task_assignments ta

    JOIN requirement_tasks rt
      ON ta.requirement_tasks_id = rt.id

    JOIN users assignee
      ON ta.assignee_user_id = assignee.id

    JOIN users creator
      ON ta.created_user_id = creator.id

    ORDER BY ta.id DESC
  `);

  return rows;
}

async function getTaskAssignmentById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      ta.id,

      ta.requirement_tasks_id,
      rt.task_name,

      ta.assignee_user_id,
      assignee.name AS assignee,

      ta.created_date,

      ta.created_user_id,
      creator.name AS created_by

    FROM task_assignments ta

    JOIN requirement_tasks rt
      ON ta.requirement_tasks_id = rt.id

    JOIN users assignee
      ON ta.assignee_user_id = assignee.id

    JOIN users creator
      ON ta.created_user_id = creator.id

    WHERE ta.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateTaskAssignment(
  id,
  requirementTasksId,
  assigneeUserId
) {
  const [result] = await pool.query(
    `UPDATE task_assignments
     SET requirement_tasks_id = ?,
         assignee_user_id = ?
     WHERE id = ?`,
    [
      requirementTasksId,
      assigneeUserId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteTaskAssignment(id) {
  const [result] = await pool.query(
    `DELETE FROM task_assignments
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createTaskAssignment,
  getAllTaskAssignments,
  getTaskAssignmentById,
  updateTaskAssignment,
  deleteTaskAssignment
};