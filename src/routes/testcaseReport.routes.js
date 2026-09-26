const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/testcaseReport.controller');

router.post(
  '/',
  controller.createTestcaseReport
);

router.get(
  '/',
  controller.getAllTestcaseReports
);

router.get(
  '/:id',
  controller.getTestcaseReportById
);

router.put(
  '/:id',
  controller.updateTestcaseReport
);

router.delete(
  '/:id',
  controller.deleteTestcaseReport
);

module.exports = router;