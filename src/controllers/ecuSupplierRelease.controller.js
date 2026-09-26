const service =
  require('../services/ecuSupplierRelease.service');

async function createEcuSupplierRelease(req, res, next) {
  try {
    const {
      version_number,
      created_user_id,
      status,
      comments
    } = req.body;

    if (
      !version_number ||
      !created_user_id ||
      !status
    ) {
      return res.status(400).json({
        error:
          'version_number, created_user_id and status are required'
      });
    }

    const id =
      await service.createEcuSupplierRelease(
        version_number,
        created_user_id,
        status,
        comments
      );

    res.status(201).json({
      message:
        'ECU supplier release created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllEcuSupplierReleases(req, res, next) {
  try {
    const data =
      await service.getAllEcuSupplierReleases();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getEcuSupplierReleaseById(req, res, next) {
  try {
    const data =
      await service.getEcuSupplierReleaseById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'ECU supplier release not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateEcuSupplierRelease(req, res, next) {
  try {
    const {
      version_number,
      status,
      comments
    } = req.body;

    if (!version_number || !status) {
      return res.status(400).json({
        error:
          'version_number and status are required'
      });
    }

    const affectedRows =
      await service.updateEcuSupplierRelease(
        req.params.id,
        version_number,
        status,
        comments
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'ECU supplier release not found'
      });
    }

    res.json({
      message:
        'ECU supplier release updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteEcuSupplierRelease(req, res, next) {
  try {
    const affectedRows =
      await service.deleteEcuSupplierRelease(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'ECU supplier release not found'
      });
    }

    res.json({
      message:
        'ECU supplier release deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEcuSupplierRelease,
  getAllEcuSupplierReleases,
  getEcuSupplierReleaseById,
  updateEcuSupplierRelease,
  deleteEcuSupplierRelease
};