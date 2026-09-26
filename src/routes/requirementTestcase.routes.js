const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/requirementTestcase.controller');

router.post('/', controller.createRequirementTestcase);

router.get('/', controller.getAllRequirementTestcases);

router.get('/:id', controller.getRequirementTestcaseById);

router.put('/:id', controller.updateRequirementTestcase);

router.delete('/:id', controller.deleteRequirementTestcase);

module.exports = router;