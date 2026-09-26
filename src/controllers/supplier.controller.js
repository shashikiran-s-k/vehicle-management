const service =
  require('../services/supplier.service');

async function createSupplier(req, res, next) {
  try {
    const {
      supplier_name,
      description,
      address,
      created_user_id
    } = req.body;

    if (!supplier_name || !created_user_id) {
      return res.status(400).json({
        error:
          'supplier_name and created_user_id are required'
      });
    }

    const id =
      await service.createSupplier(
        supplier_name,
        description,
        address,
        created_user_id
      );

    res.status(201).json({
      message: 'Supplier created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllSuppliers(req, res, next) {
  try {
    const suppliers =
      await service.getAllSuppliers();

    res.json(suppliers);
  } catch (error) {
    next(error);
  }
}

async function getSupplierById(req, res, next) {
  try {
    const supplier =
      await service.getSupplierById(
        req.params.id
      );

    if (!supplier) {
      return res.status(404).json({
        error: 'Supplier not found'
      });
    }

    res.json(supplier);
  } catch (error) {
    next(error);
  }
}

async function updateSupplier(req, res, next) {
  try {
    const {
      supplier_name,
      description,
      address
    } = req.body;

    if (!supplier_name) {
      return res.status(400).json({
        error: 'supplier_name is required'
      });
    }

    const affectedRows =
      await service.updateSupplier(
        req.params.id,
        supplier_name,
        description,
        address
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Supplier not found'
      });
    }

    res.json({
      message: 'Supplier updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    const affectedRows =
      await service.deleteSupplier(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Supplier not found'
      });
    }

    res.json({
      message: 'Supplier deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};