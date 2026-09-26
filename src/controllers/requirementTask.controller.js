const service =
  require('../services/requirementTask.service');

async function createRequirementTask(req, res, next) {
  try {
    const {
      requirement_id,
      task_name,
      status,
      created_user_id
    } = req.body;

    if (
      !requirement_id ||
      !task_name ||
      !status ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'requirement_id, task_name, status and created_user_id are required'
      });
    }

    const id =
      await service.createRequirementTask(
        requirement_id,
        task_name,
        status,
        created_user_id
      );

    res.status(201).json({
      message: 'Requirement task created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllRequirementTasks(req, res, next) {
  try {
    const data =
      await service.getAllRequirementTasks();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getRequirementTaskById(req, res, next) {
  try {
    const data =
      await service.getRequirementTaskById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Requirement task not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateRequirementTask(req, res, next) {
  try {
    const {
      requirement_id,
      task_name,
      status
    } = req.body;

    if (
      !requirement_id ||
      !task_name ||
      !status
    ) {
      return res.status(400).json({
        error:
          'requirement_id, task_name and status are required'
      });
    }

    const affectedRows =
      await service.updateRequirementTask(
        req.params.id,
        requirement_id,
        task_name,
        status
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Requirement task not found'
      });
    }

    res.json({
      message: 'Requirement task updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteRequirementTask(req, res, next) {
  try {
    const affectedRows =
      await service.deleteRequirementTask(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Requirement task not found'
      });
    }

    res.json({
      message: 'Requirement task deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createRequirementTask,
  getAllRequirementTasks,
  getRequirementTaskById,
  updateRequirementTask,
  deleteRequirementTask
};