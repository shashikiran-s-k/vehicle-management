const service = require('../services/ecu.service');

async function createEcu(req, res, next) {
  try {
    const {
      name,
      description,
      created_user_id
    } = req.body;

    if (!name || !created_user_id) {
      return res.status(400).json({
        error: 'name and created_user_id are required'
      });
    }

    const id = await service.createEcu(
      name,
      description,
      created_user_id
    );

    res.status(201).json({
      message: 'ECU created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllEcus(req, res, next) {
  try {
    const ecus = await service.getAllEcus();

    res.json(ecus);
  } catch (error) {
    next(error);
  }
}

async function getEcuById(req, res, next) {
  try {
    const ecu =
      await service.getEcuById(req.params.id);

    if (!ecu) {
      return res.status(404).json({
        error: 'ECU not found'
      });
    }

    res.json(ecu);
  } catch (error) {
    next(error);
  }
}

async function updateEcu(req, res, next) {
  try {
    const {
      name,
      description
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'name is required'
      });
    }

    const affectedRows =
      await service.updateEcu(
        req.params.id,
        name,
        description
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'ECU not found'
      });
    }

    res.json({
      message: 'ECU updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteEcu(req, res, next) {
  try {
    const affectedRows =
      await service.deleteEcu(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'ECU not found'
      });
    }

    res.json({
      message: 'ECU deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEcu,
  getAllEcus,
  getEcuById,
  updateEcu,
  deleteEcu
};