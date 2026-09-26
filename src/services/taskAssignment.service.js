const repository =
  require('../repositories/taskAssignment.repository');

const pool = require('../config/database');

async function createTaskAssignment(
  requirementTasksId,
  assigneeUserId,
  createdUserId
) {
  const [tasks] = await pool.query(
    'SELECT id FROM requirement_tasks WHERE id = ?',
    [requirementTasksId]
  );

  if (tasks.length === 0) {
    throw new Error('Requirement task not found');
  }

  const [assignees] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [assigneeUserId]
  );

  if (assignees.length === 0) {
    throw new Error('Assignee user not found');
  }

  const [creators] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [createdUserId]
  );

  if (creators.length === 0) {
    throw new Error('Created user not found');
  }

  return repository.createTaskAssignment(
    requirementTasksId,
    assigneeUserId,
    createdUserId
  );
}

async function getAllTaskAssignments() {
  return repository.getAllTaskAssignments();
}

async function getTaskAssignmentById(id) {
  return repository.getTaskAssignmentById(id);
}

async function updateTaskAssignment(
  id,
  requirementTasksId,
  assigneeUserId
) {
  const [tasks] = await pool.query(
    'SELECT id FROM requirement_tasks WHERE id = ?',
    [requirementTasksId]
  );

  if (tasks.length === 0) {
    throw new Error('Requirement task not found');
  }

  const [assignees] = await pool.query(
    'SELECT id FROM users WHERE id = ?',
    [assigneeUserId]
  );

  if (assignees.length === 0) {
    throw new Error('Assignee user not found');
  }

  return repository.updateTaskAssignment(
    id,
    requirementTasksId,
    assigneeUserId
  );
}

async function deleteTaskAssignment(id) {
  return repository.deleteTaskAssignment(id);
}

module.exports = {
  createTaskAssignment,
  getAllTaskAssignments,
  getTaskAssignmentById,
  updateTaskAssignment,
  deleteTaskAssignment
};