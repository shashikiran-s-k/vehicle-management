/**
 * @swagger
 * /api/v1/model-features:
 *   post:
 *     summary: Create model-feature mapping
 *     tags:
 *       - Model Features
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model_id
 *               - feature_id
 *               - status
 *               - created_user_id
 *             properties:
 *               model_id:
 *                 type: integer
 *                 example: 1
 *               feature_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: ACTIVE
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Model-feature mapping created successfully
 *
 *   get:
 *     summary: Get all model-feature mappings
 *     tags:
 *       - Model Features
 *     responses:
 *       200:
 *         description: List of model-feature mappings
 */

/**
 * @swagger
 * /api/v1/model-features/{id}:
 *   get:
 *     summary: Get model-feature mapping by ID
 *     tags:
 *       - Model Features
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mapping found
 *       404:
 *         description: Mapping not found
 *
 *   put:
 *     summary: Update model-feature mapping
 *     tags:
 *       - Model Features
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
 *               - model_id
 *               - feature_id
 *               - status
 *             properties:
 *               model_id:
 *                 type: integer
 *                 example: 1
 *               feature_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: ACTIVE
 *     responses:
 *       200:
 *         description: Mapping updated successfully
 *
 *   delete:
 *     summary: Delete model-feature mapping
 *     tags:
 *       - Model Features
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mapping deleted successfully
 */