const service =
  require('../services/modelFeature.service');

async function createModelFeature(req, res, next) {
  try {
    const {
      model_id,
      feature_id,
      status,
      created_user_id
    } = req.body;

    if (
      !model_id ||
      !feature_id ||
      !status ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'model_id, feature_id, status and created_user_id are required'
      });
    }

    const id =
      await service.createModelFeature(
        model_id,
        feature_id,
        status,
        created_user_id
      );

    res.status(201).json({
      message: 'Model feature created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllModelFeatures(req, res, next) {
  try {
    const data =
      await service.getAllModelFeatures();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getModelFeatureById(req, res, next) {
  try {
    const data =
      await service.getModelFeatureById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Model feature not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateModelFeature(req, res, next) {
  try {
    const {
      model_id,
      feature_id,
      status
    } = req.body;

    if (!model_id || !feature_id || !status) {
      return res.status(400).json({
        error:
          'model_id, feature_id and status are required'
      });
    }

    const affectedRows =
      await service.updateModelFeature(
        req.params.id,
        model_id,
        feature_id,
        status
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Model feature not found'
      });
    }

    res.json({
      message: 'Model feature updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteModelFeature(req, res, next) {
  try {
    const affectedRows =
      await service.deleteModelFeature(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Model feature not found'
      });
    }

    res.json({
      message: 'Model feature deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createModelFeature,
  getAllModelFeatures,
  getModelFeatureById,
  updateModelFeature,
  deleteModelFeature
};