const service =
  require('../services/featureRequirement.service');

async function createFeatureRequirement(req, res, next) {
  try {
    const {
      requirement,
      model_feature_id,
      created_user_id,
      status
    } = req.body;

    if (
      !requirement ||
      !model_feature_id ||
      !created_user_id ||
      !status
    ) {
      return res.status(400).json({
        error:
          'requirement, model_feature_id, created_user_id and status are required'
      });
    }

    const id =
      await service.createFeatureRequirement(
        requirement,
        model_feature_id,
        created_user_id,
        status
      );

    res.status(201).json({
      message:
        'Feature requirement created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeatureRequirements(req, res, next) {
  try {
    const data =
      await service.getAllFeatureRequirements();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getFeatureRequirementById(req, res, next) {
  try {
    const data =
      await service.getFeatureRequirementById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Feature requirement not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateFeatureRequirement(req, res, next) {
  try {
    const {
      requirement,
      model_feature_id,
      status
    } = req.body;

    if (
      !requirement ||
      !model_feature_id ||
      !status
    ) {
      return res.status(400).json({
        error:
          'requirement, model_feature_id and status are required'
      });
    }

    const affectedRows =
      await service.updateFeatureRequirement(
        req.params.id,
        requirement,
        model_feature_id,
        status
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature requirement not found'
      });
    }

    res.json({
      message:
        'Feature requirement updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteFeatureRequirement(req, res, next) {
  try {
    const affectedRows =
      await service.deleteFeatureRequirement(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature requirement not found'
      });
    }

    res.json({
      message:
        'Feature requirement deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFeatureRequirement,
  getAllFeatureRequirements,
  getFeatureRequirementById,
  updateFeatureRequirement,
  deleteFeatureRequirement
};