const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/modelFeature.controller');

router.post('/', controller.createModelFeature);

router.get('/', controller.getAllModelFeatures);

router.get('/:id', controller.getModelFeatureById);

router.put('/:id', controller.updateModelFeature);

router.delete('/:id', controller.deleteModelFeature);

module.exports = router;