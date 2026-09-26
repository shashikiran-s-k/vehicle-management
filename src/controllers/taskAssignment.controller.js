const service =
  require('../services/taskAssignment.service');

async function createTaskAssignment(req, res, next) {
  try {
    const {
      requirement_tasks_id,
      assignee_user_id,
      created_user_id
    } = req.body;

    if (
      !requirement_tasks_id ||
      !assignee_user_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'requirement_tasks_id, assignee_user_id and created_user_id are required'
      });
    }

    const id =
      await service.createTaskAssignment(
        requirement_tasks_id,
        assignee_user_id,
        created_user_id
      );

    res.status(201).json({
      message: 'Task assignment created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllTaskAssignments(req, res, next) {
  try {
    const data =
      await service.getAllTaskAssignments();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getTaskAssignmentById(req, res, next) {
  try {
    const data =
      await service.getTaskAssignmentById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Task assignment not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateTaskAssignment(req, res, next) {
  try {
    const {
      requirement_tasks_id,
      assignee_user_id
    } = req.body;

    if (
      !requirement_tasks_id ||
      !assignee_user_id
    ) {
      return res.status(400).json({
        error:
          'requirement_tasks_id and assignee_user_id are required'
      });
    }

    const affectedRows =
      await service.updateTaskAssignment(
        req.params.id,
        requirement_tasks_id,
        assignee_user_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Task assignment not found'
      });
    }

    res.json({
      message: 'Task assignment updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteTaskAssignment(req, res, next) {
  try {
    const affectedRows =
      await service.deleteTaskAssignment(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Task assignment not found'
      });
    }

    res.json({
      message: 'Task assignment deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTaskAssignment,
  getAllTaskAssignments,
  getTaskAssignmentById,
  updateTaskAssignment,
  deleteTaskAssignment
};