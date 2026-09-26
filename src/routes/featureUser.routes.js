const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/featureUser.controller');

router.post('/', controller.createFeatureUser);

router.get('/', controller.getAllFeatureUsers);

router.get('/:id', controller.getFeatureUserById);

router.put('/:id', controller.updateFeatureUser);

router.delete('/:id', controller.deleteFeatureUser);

module.exports = router;