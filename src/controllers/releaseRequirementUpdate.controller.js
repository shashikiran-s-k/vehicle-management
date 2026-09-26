const service =
  require('../services/releaseRequirementUpdate.service');

async function createReleaseRequirementUpdate(req, res, next) {
  try {
    const {
      release_id,
      requirement_id,
      status,
      created_user_id
    } = req.body;

    if (
      !release_id ||
      !requirement_id ||
      !status ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'release_id, requirement_id, status and created_user_id are required'
      });
    }

    const id =
      await service.createReleaseRequirementUpdate(
        release_id,
        requirement_id,
        status,
        created_user_id
      );

    res.status(201).json({
      message:
        'Release requirement update created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllReleaseRequirementUpdates(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getAllReleaseRequirementUpdates();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getReleaseRequirementUpdateById(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getReleaseRequirementUpdateById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error:
          'Release requirement update not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateReleaseRequirementUpdate(
  req,
  res,
  next
) {
  try {
    const {
      release_id,
      requirement_id,
      status
    } = req.body;

    if (
      !release_id ||
      !requirement_id ||
      !status
    ) {
      return res.status(400).json({
        error:
          'release_id, requirement_id and status are required'
      });
    }

    const affectedRows =
      await service.updateReleaseRequirementUpdate(
        req.params.id,
        release_id,
        requirement_id,
        status
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Release requirement update not found'
      });
    }

    res.json({
      message:
        'Release requirement update updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteReleaseRequirementUpdate(
  req,
  res,
  next
) {
  try {
    const affectedRows =
      await service.deleteReleaseRequirementUpdate(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Release requirement update not found'
      });
    }

    res.json({
      message:
        'Release requirement update deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createReleaseRequirementUpdate,
  getAllReleaseRequirementUpdates,
  getReleaseRequirementUpdateById,
  updateReleaseRequirementUpdate,
  deleteReleaseRequirementUpdate
};