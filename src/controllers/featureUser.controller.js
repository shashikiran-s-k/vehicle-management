const service =
  require('../services/featureUser.service');

async function createFeatureUser(req, res, next) {
  try {
    const {
      model_feature_id,
      user_id,
      created_user_id
    } = req.body;

    if (
      !model_feature_id ||
      !user_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'model_feature_id, user_id and created_user_id are required'
      });
    }

    const id =
      await service.createFeatureUser(
        model_feature_id,
        user_id,
        created_user_id
      );

    res.status(201).json({
      message: 'Feature user created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeatureUsers(req, res, next) {
  try {
    const data =
      await service.getAllFeatureUsers();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getFeatureUserById(req, res, next) {
  try {
    const data =
      await service.getFeatureUserById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Feature user not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateFeatureUser(req, res, next) {
  try {
    const {
      model_feature_id,
      user_id
    } = req.body;

    if (!model_feature_id || !user_id) {
      return res.status(400).json({
        error:
          'model_feature_id and user_id are required'
      });
    }

    const affectedRows =
      await service.updateFeatureUser(
        req.params.id,
        model_feature_id,
        user_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature user not found'
      });
    }

    res.json({
      message: 'Feature user updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteFeatureUser(req, res, next) {
  try {
    const affectedRows =
      await service.deleteFeatureUser(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Feature user not found'
      });
    }

    res.json({
      message: 'Feature user deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFeatureUser,
  getAllFeatureUsers,
  getFeatureUserById,
  updateFeatureUser,
  deleteFeatureUser
};