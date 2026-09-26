const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/requirementTask.controller');

router.post('/', controller.createRequirementTask);

router.get('/', controller.getAllRequirementTasks);

router.get('/:id', controller.getRequirementTaskById);

router.put('/:id', controller.updateRequirementTask);

router.delete('/:id', controller.deleteRequirementTask);

module.exports = router;