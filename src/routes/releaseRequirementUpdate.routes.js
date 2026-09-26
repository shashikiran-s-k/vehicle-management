const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/releaseRequirementUpdate.controller');

router.post(
  '/',
  controller.createReleaseRequirementUpdate
);

router.get(
  '/',
  controller.getAllReleaseRequirementUpdates
);

router.get(
  '/:id',
  controller.getReleaseRequirementUpdateById
);

router.put(
  '/:id',
  controller.updateReleaseRequirementUpdate
);

router.delete(
  '/:id',
  controller.deleteReleaseRequirementUpdate
);

module.exports = router;