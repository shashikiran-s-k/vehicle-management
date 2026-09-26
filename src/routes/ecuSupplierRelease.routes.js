const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/ecuSupplierRelease.controller');

router.post('/', controller.createEcuSupplierRelease);

router.get('/', controller.getAllEcuSupplierReleases);

router.get('/:id', controller.getEcuSupplierReleaseById);

router.put('/:id', controller.updateEcuSupplierRelease);

router.delete('/:id', controller.deleteEcuSupplierRelease);

module.exports = router;