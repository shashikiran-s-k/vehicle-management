/**
 * @swagger
 * /api/v1/feature-requirements:
 *   post:
 *     summary: Create a feature requirement
 *     tags:
 *       - Feature Requirements
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirement
 *               - model_feature_id
 *               - created_user_id
 *               - status
 *             properties:
 *               requirement:
 *                 type: string
 *                 example: Vehicle should support automatic emergency braking
 *               model_feature_id:
 *                 type: integer
 *                 example: 1
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: OPEN
 *     responses:
 *       201:
 *         description: Feature requirement created successfully
 *
 *   get:
 *     summary: Get all feature requirements
 *     tags:
 *       - Feature Requirements
 *     responses:
 *       200:
 *         description: List of feature requirements
 */

/**
 * @swagger
 * /api/v1/feature-requirements/{id}:
 *   get:
 *     summary: Get feature requirement by ID
 *     tags:
 *       - Feature Requirements
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feature requirement found
 *
 *   put:
 *     summary: Update feature requirement
 *     tags:
 *       - Feature Requirements
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
 *               - requirement
 *               - model_feature_id
 *               - status
 *             properties:
 *               requirement:
 *                 type: string
 *               model_feature_id:
 *                 type: integer
 *               status:
 *                 type: string
 *                 example: IMPLEMENTED
 *     responses:
 *       200:
 *         description: Feature requirement updated successfully
 *
 *   delete:
 *     summary: Delete feature requirement
 *     tags:
 *       - Feature Requirements
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feature requirement deleted successfully
 */