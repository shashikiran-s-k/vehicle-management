const service = require('../services/feature.service');

async function createFeature(req, res, next) {
  try {
    const {
      feature_name,
      description,
      created_user_id
    } = req.body;

    if (!feature_name || !created_user_id) {
      return res.status(400).json({
        error: 'feature_name and created_user_id are required'
      });
    }

    const id = await service.createFeature(
      feature_name,
      description,
      created_user_id
    );

    res.status(201).json({
      message: 'Feature created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeatures(req, res, next) {
  try {
    const features = await service.getAllFeatures();

    res.json(features);
  } catch (error) {
    next(error);
  }
}

async function getFeatureById(req, res, next) {
  try {
    const feature =
      await service.getFeatureById(req.params.id);

    if (!feature) {
      return res.status(404).json({
        error: 'Feature not found'
      });
    }

    res.json(feature);
  } catch (error) {
    next(error);
  }
}

async function updateFeature(req, res, next) {
  try {
    const {
      feature_name,
      description
    } = req.body;

    if (!feature_name) {
      return res.status(400).json({
        error: 'feature_name is required'
      });
    }

    const affectedRows =
      await service.updateFeature(
        req.params.id,
        feature_name,
        description
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature not found'
      });
    }

    res.json({
      message: 'Feature updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteFeature(req, res, next) {
  try {
    const affectedRows =
      await service.deleteFeature(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature not found'
      });
    }

    res.json({
      message: 'Feature deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFeature,
  getAllFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature
};