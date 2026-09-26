const service =
  require('../services/featureEcuSupplier.service');

async function createFeatureEcuSupplier(
  req,
  res,
  next
) {
  try {
    const {
      model_feature_id,
      ecu_supplier_id,
      created_user_id
    } = req.body;

    if (
      !model_feature_id ||
      !ecu_supplier_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'model_feature_id, ecu_supplier_id and created_user_id are required'
      });
    }

    const id =
      await service.createFeatureEcuSupplier(
        model_feature_id,
        ecu_supplier_id,
        created_user_id
      );

    res.status(201).json({
      message:
        'Feature ECU supplier created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeatureEcuSuppliers(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getAllFeatureEcuSuppliers();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getFeatureEcuSupplierById(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getFeatureEcuSupplierById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error:
          'Feature ECU supplier not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateFeatureEcuSupplier(
  req,
  res,
  next
) {
  try {
    const {
      model_feature_id,
      ecu_supplier_id
    } = req.body;

    if (
      !model_feature_id ||
      !ecu_supplier_id
    ) {
      return res.status(400).json({
        error:
          'model_feature_id and ecu_supplier_id are required'
      });
    }

    const affectedRows =
      await service.updateFeatureEcuSupplier(
        req.params.id,
        model_feature_id,
        ecu_supplier_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Feature ECU supplier not found'
      });
    }

    res.json({
      message:
        'Feature ECU supplier updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteFeatureEcuSupplier(
  req,
  res,
  next
) {
  try {
    const affectedRows =
      await service.deleteFeatureEcuSupplier(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Feature ECU supplier not found'
      });
    }

    res.json({
      message:
        'Feature ECU supplier deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFeatureEcuSupplier,
  getAllFeatureEcuSuppliers,
  getFeatureEcuSupplierById,
  updateFeatureEcuSupplier,
  deleteFeatureEcuSupplier
};