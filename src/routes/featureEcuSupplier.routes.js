const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/featureEcuSupplier.controller');

router.post('/', controller.createFeatureEcuSupplier);

router.get('/', controller.getAllFeatureEcuSuppliers);

router.get('/:id', controller.getFeatureEcuSupplierById);

router.put('/:id', controller.updateFeatureEcuSupplier);

router.delete('/:id', controller.deleteFeatureEcuSupplier);

module.exports = router;