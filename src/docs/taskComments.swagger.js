/**
 * @swagger
 * /api/v1/task-comments:
 *   post:
 *     summary: Create task comment
 *     tags:
 *       - Task Comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirement_tasks_id
 *               - comments
 *               - commented_user_id
 *               - created_user_id
 *             properties:
 *               requirement_tasks_id:
 *                 type: integer
 *                 example: 1
 *               comments:
 *                 type: string
 *                 example: Development completed and ready for testing.
 *               commented_user_id:
 *                 type: integer
 *                 example: 2
 *               created_user_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Task comment created successfully
 *
 *   get:
 *     summary: Get all task comments
 *     tags:
 *       - Task Comments
 *     responses:
 *       200:
 *         description: List of task comments
 */

/**
 * @swagger
 * /api/v1/task-comments/{id}:
 *   get:
 *     summary: Get task comment by ID
 *     tags:
 *       - Task Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task comment found
 *
 *   put:
 *     summary: Update task comment
 *     tags:
 *       - Task Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirement_tasks_id
 *               - comments
 *               - commented_user_id
 *             properties:
 *               requirement_tasks_id:
 *                 type: integer
 *               comments:
 *                 type: string
 *               commented_user_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Task comment updated successfully
 *
 *   delete:
 *     summary: Delete task comment
 *     tags:
 *       - Task Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task comment deleted successfully
 */