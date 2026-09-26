/**
 * @swagger
 * /api/v1/task-assignments:
 *   post:
 *     summary: Assign a user to a requirement task
 *     tags:
 *       - Task Assignments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirement_tasks_id
 *               - assignee_user_id
 *               - created_user_id
 *             properties:
 *               requirement_tasks_id:
 *                 type: integer
 *                 example: 1
 *               assignee_user_id:
 *                 type: integer
 *                 example: 2
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Task assignment created successfully
 *
 *   get:
 *     summary: Get all task assignments
 *     tags:
 *       - Task Assignments
 *     responses:
 *       200:
 *         description: List of task assignments
 */

/**
 * @swagger
 * /api/v1/task-assignments/{id}:
 *   get:
 *     summary: Get task assignment by ID
 *     tags:
 *       - Task Assignments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task assignment found
 *
 *   put:
 *     summary: Update task assignment
 *     tags:
 *       - Task Assignments
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
 *               - assignee_user_id
 *             properties:
 *               requirement_tasks_id:
 *                 type: integer
 *               assignee_user_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Task assignment updated successfully
 *
 *   delete:
 *     summary: Delete task assignment
 *     tags:
 *       - Task Assignments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task assignment deleted successfully
 */