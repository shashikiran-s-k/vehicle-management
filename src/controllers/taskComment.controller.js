const service =
  require('../services/taskComment.service');

async function createTaskComment(req, res, next) {
  try {
    const {
      requirement_tasks_id,
      comments,
      commented_user_id,
      created_user_id
    } = req.body;

    if (
      !requirement_tasks_id ||
      !comments ||
      !commented_user_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'requirement_tasks_id, comments, commented_user_id and created_user_id are required'
      });
    }

    const id =
      await service.createTaskComment(
        requirement_tasks_id,
        comments,
        commented_user_id,
        created_user_id
      );

    res.status(201).json({
      message: 'Task comment created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllTaskComments(req, res, next) {
  try {
    const data =
      await service.getAllTaskComments();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getTaskCommentById(req, res, next) {
  try {
    const data =
      await service.getTaskCommentById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Task comment not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateTaskComment(req, res, next) {
  try {
    const {
      requirement_tasks_id,
      comments,
      commented_user_id
    } = req.body;

    if (
      !requirement_tasks_id ||
      !comments ||
      !commented_user_id
    ) {
      return res.status(400).json({
        error:
          'requirement_tasks_id, comments and commented_user_id are required'
      });
    }

    const affectedRows =
      await service.updateTaskComment(
        req.params.id,
        requirement_tasks_id,
        comments,
        commented_user_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Task comment not found'
      });
    }

    res.json({
      message: 'Task comment updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteTaskComment(req, res, next) {
  try {
    const affectedRows =
      await service.deleteTaskComment(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Task comment not found'
      });
    }

    res.json({
      message: 'Task comment deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTaskComment,
  getAllTaskComments,
  getTaskCommentById,
  updateTaskComment,
  deleteTaskComment
};