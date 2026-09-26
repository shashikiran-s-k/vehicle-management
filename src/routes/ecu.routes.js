const express = require('express');

const router = express.Router();

const controller = require('../controllers/ecu.controller');

router.post('/', controller.createEcu);

router.get('/', controller.getAllEcus);

router.get('/:id', controller.getEcuById);

router.put('/:id', controller.updateEcu);

router.delete('/:id', controller.deleteEcu);

module.exports = router;