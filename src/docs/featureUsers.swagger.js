/**
 * @swagger
 * /api/v1/feature-users:
 *   post:
 *     summary: Assign a user to a feature
 *     tags:
 *       - Feature Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model_feature_id
 *               - user_id
 *               - created_user_id
 *             properties:
 *               model_feature_id:
 *                 type: integer
 *                 example: 1
 *               user_id:
 *                 type: integer
 *                 example: 2
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: User assigned to feature successfully
 *
 *   get:
 *     summary: Get all feature user assignments
 *     tags:
 *       - Feature Users
 *     responses:
 *       200:
 *         description: List of feature user assignments
 */

/**
 * @swagger
 * /api/v1/feature-users/{id}:
 *   get:
 *     summary: Get feature user assignment by ID
 *     tags:
 *       - Feature Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Assignment found
 *
 *   put:
 *     summary: Update feature user assignment
 *     tags:
 *       - Feature Users
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
 *               - model_feature_id
 *               - user_id
 *             properties:
 *               model_feature_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Assignment updated successfully
 *
 *   delete:
 *     summary: Delete feature user assignment
 *     tags:
 *       - Feature Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Assignment deleted successfully
 */