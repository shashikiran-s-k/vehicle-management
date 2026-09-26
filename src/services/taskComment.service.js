const repository =
  require('../repositories/taskComment.repository');

const pool = require('../config/database');

async function createTaskComment(
  requirementTasksId,
  comments,
  commentedUserId,
  createdUserId
) {
  const [tasks] = await pool.query(
    'SELECT id FROM requirement_tasks WHERE id = ?',
    [requirementTasksId]
  );

  if (tasks.length === 0) {
    throw new Error('Requirement task not found');
  }

  const [commenters] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [commentedUserId]
  );

  if (commenters.length === 0) {
    throw new Error('Commented user not found');
  }

  const [creators] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (creators.length === 0) {
    throw new Error('Created user not found');
  }

  return repository.createTaskComment(
    requirementTasksId,
    comments,
    commentedUserId,
    createdUserId
  );
}

async function getAllTaskComments() {
  return repository.getAllTaskComments();
}

async function getTaskCommentById(id) {
  return repository.getTaskCommentById(id);
}

async function updateTaskComment(
  id,
  requirementTasksId,
  comments,
  commentedUserId
) {
  const [tasks] = await pool.query(
    'SELECT id FROM requirement_tasks WHERE id = ?',
    [requirementTasksId]
  );

  if (tasks.length === 0) {
    throw new Error('Requirement task not found');
  }

  const [commenters] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [commentedUserId]
  );

  if (commenters.length === 0) {
    throw new Error('Commented user not found');
  }

  return repository.updateTaskComment(
    id,
    requirementTasksId,
    comments,
    commentedUserId
  );
}

async function deleteTaskComment(id) {
  return repository.deleteTaskComment(id);
}

module.exports = {
  createTaskComment,
  getAllTaskComments,
  getTaskCommentById,
  updateTaskComment,
  deleteTaskComment
};