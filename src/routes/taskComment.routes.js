const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/taskComment.controller');

router.post('/', controller.createTaskComment);

router.get('/', controller.getAllTaskComments);

router.get('/:id', controller.getTaskCommentById);

router.put('/:id', controller.updateTaskComment);

router.delete('/:id', controller.deleteTaskComment);

module.exports = router;