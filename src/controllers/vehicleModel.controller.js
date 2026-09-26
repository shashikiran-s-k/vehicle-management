const service = require('../services/vehicleModel.service');

async function createVehicleModel(req, res, next) {
  try {
    const {
      model_name,
      vehicle_type,
       image_url,
      created_user_id
    } = req.body;

    if (!model_name || !vehicle_type || !created_user_id) {
      return res.status(400).json({
        error: 'model_name, vehicle_type and created_user_id are required'
      });
    }

    const id = await service.createVehicleModel(
      model_name,
      vehicle_type,
      image_url,
      created_user_id
    );

    res.status(201).json({
      message: 'Vehicle model created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllVehicleModels(req, res, next) {
  try {
    const models = await service.getAllVehicleModels();

    res.json(models);
  } catch (error) {
    next(error);
  }
}

async function getVehicleModelById(req, res, next) {
  try {
    const model =
      await service.getVehicleModelById(req.params.id);

    if (!model) {
      return res.status(404).json({
        error: 'Vehicle model not found'
      });
    }

    res.json(model);
  } catch (error) {
    next(error);
  }
}

async function updateVehicleModel(req, res, next) {
  try {
    const {
      model_name,
      image_url,
      vehicle_type
    } = req.body;

    if (!model_name || !vehicle_type) {
      return res.status(400).json({
        error: 'model_name and vehicle_type are required'
      });
    }

    const affectedRows =
      await service.updateVehicleModel(
        req.params.id,
        model_name,
        image_url,
        vehicle_type
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Vehicle model not found'
      });
    }

    res.json({
      message: 'Vehicle model updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteVehicleModel(req, res, next) {
  try {
    const affectedRows =
      await service.deleteVehicleModel(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Vehicle model not found'
      });
    }

    res.json({
      message: 'Vehicle model deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createVehicleModel,
  getAllVehicleModels,
  getVehicleModelById,
  updateVehicleModel,
  deleteVehicleModel
};