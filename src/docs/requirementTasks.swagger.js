/**
 * @swagger
 * /api/v1/requirement-tasks:
 *   post:
 *     summary: Create requirement task
 *     tags:
 *       - Requirement Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirement_id
 *               - task_name
 *               - status
 *               - created_user_id
 *             properties:
 *               requirement_id:
 *                 type: integer
 *                 example: 1
 *               task_name:
 *                 type: string
 *                 example: Develop ECU logic
 *               status:
 *                 type: string
 *                 example: OPEN
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Requirement task created successfully
 *
 *   get:
 *     summary: Get all requirement tasks
 *     tags:
 *       - Requirement Tasks
 *     responses:
 *       200:
 *         description: List of requirement tasks
 */

/**
 * @swagger
 * /api/v1/requirement-tasks/{id}:
 *   get:
 *     summary: Get requirement task by ID
 *     tags:
 *       - Requirement Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Requirement task found
 *
 *   put:
 *     summary: Update requirement task
 *     tags:
 *       - Requirement Tasks
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
 *               - requirement_id
 *               - task_name
 *               - status
 *             properties:
 *               requirement_id:
 *                 type: integer
 *               task_name:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Requirement task updated successfully
 *
 *   delete:
 *     summary: Delete requirement task
 *     tags:
 *       - Requirement Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Requirement task deleted successfully
 */