const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/ecuSupplier.controller');

router.post('/', controller.createEcuSupplier);

router.get('/', controller.getAllEcuSuppliers);

router.get('/:id', controller.getEcuSupplierById);

router.put('/:id', controller.updateEcuSupplier);

router.delete('/:id', controller.deleteEcuSupplier);

module.exports = router;