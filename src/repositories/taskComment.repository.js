const pool = require('../config/database');

async function createTaskComment(
  requirementTasksId,
  comments,
  commentedUserId,
  createdUserId
) {
  const [result] = await pool.query(
    `INSERT INTO task_comments
      (
        requirement_tasks_id,
        comments,
        commented_user_id,
        created_user_id
      )
     VALUES (?, ?, ?, ?)`,
    [
      requirementTasksId,
      comments,
      commentedUserId,
      createdUserId
    ]
  );

  return result.insertId;
}

async function getAllTaskComments() {
  const [rows] = await pool.query(`
    SELECT
      tc.id,

      tc.requirement_tasks_id,
      rt.task_name,

      tc.comments,

      tc.commented_user_id,
      commenter.name AS commented_by,

      tc.created_user_id,
      creator.name AS created_by

    FROM task_comments tc

    JOIN requirement_tasks rt
      ON tc.requirement_tasks_id = rt.id

    JOIN users commenter
      ON tc.commented_user_id = commenter.id

    JOIN users creator
      ON tc.created_user_id = creator.id

    ORDER BY tc.id DESC
  `);

  return rows;
}

async function getTaskCommentById(id) {
  const [rows] = await pool.query(
    `
    SELECT
      tc.id,

      tc.requirement_tasks_id,
      rt.task_name,

      tc.comments,

      tc.commented_user_id,
      commenter.name AS commented_by,

      tc.created_user_id,
      creator.name AS created_by

    FROM task_comments tc

    JOIN requirement_tasks rt
      ON tc.requirement_tasks_id = rt.id

    JOIN users commenter
      ON tc.commented_user_id = commenter.id

    JOIN users creator
      ON tc.created_user_id = creator.id

    WHERE tc.id = ?
    `,
    [id]
  );

  return rows[0];
}

async function updateTaskComment(
  id,
  requirementTasksId,
  comments,
  commentedUserId
) {
  const [result] = await pool.query(
    `UPDATE task_comments
     SET requirement_tasks_id = ?,
         comments = ?,
         commented_user_id = ?
     WHERE id = ?`,
    [
      requirementTasksId,
      comments,
      commentedUserId,
      id
    ]
  );

  return result.affectedRows;
}

async function deleteTaskComment(id) {
  const [result] = await pool.query(
    `DELETE FROM task_comments
     WHERE id = ?`,
    [id]
  );

  return result.affectedRows;
}

module.exports = {
  createTaskComment,
  getAllTaskComments,
  getTaskCommentById,
  updateTaskComment,
  deleteTaskComment
};