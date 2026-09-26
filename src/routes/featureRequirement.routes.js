const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/featureRequirement.controller');

router.post('/', controller.createFeatureRequirement);

router.get('/', controller.getAllFeatureRequirements);

router.get('/:id', controller.getFeatureRequirementById);

router.put('/:id', controller.updateFeatureRequirement);

router.delete('/:id', controller.deleteFeatureRequirement);

module.exports = router;