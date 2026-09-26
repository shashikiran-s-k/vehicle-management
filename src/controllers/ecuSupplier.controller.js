const service =
  require('../services/ecuSupplier.service');

async function createEcuSupplier(req, res, next) {
  try {
    const {
      ecu_id,
      supplier_id,
      created_user_id
    } = req.body;

    if (
      !ecu_id ||
      !supplier_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'ecu_id, supplier_id and created_user_id are required'
      });
    }

    const id =
      await service.createEcuSupplier(
        ecu_id,
        supplier_id,
        created_user_id
      );

    res.status(201).json({
      message:
        'ECU supplier created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllEcuSuppliers(req, res, next) {
  try {
    const data =
      await service.getAllEcuSuppliers();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getEcuSupplierById(req, res, next) {
  try {
    const data =
      await service.getEcuSupplierById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'ECU supplier not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateEcuSupplier(req, res, next) {
  try {
    const {
      ecu_id,
      supplier_id
    } = req.body;

    if (!ecu_id || !supplier_id) {
      return res.status(400).json({
        error:
          'ecu_id and supplier_id are required'
      });
    }

    const affectedRows =
      await service.updateEcuSupplier(
        req.params.id,
        ecu_id,
        supplier_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'ECU supplier not found'
      });
    }

    res.json({
      message:
        'ECU supplier updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteEcuSupplier(req, res, next) {
  try {
    const affectedRows =
      await service.deleteEcuSupplier(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'ECU supplier not found'
      });
    }

    res.json({
      message:
        'ECU supplier deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEcuSupplier,
  getAllEcuSuppliers,
  getEcuSupplierById,
  updateEcuSupplier,
  deleteEcuSupplier
};