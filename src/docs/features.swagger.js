/**
 * @swagger
 * /api/v1/features:
 *   post:
 *     summary: Create a feature
 *     tags:
 *       - Features
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - feature_name
 *               - description
 *               - created_user_id
 *             properties:
 *               feature_name:
 *                 type: string
 *                 example: Sunroof
 *               description:
 *                 type: string
 *                 example: Panoramic sunroof
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Feature created successfully
 *       400:
 *         description: Invalid request
 *
 *   get:
 *     summary: Get all features
 *     tags:
 *       - Features
 *     responses:
 *       200:
 *         description: List of features
 */

/**
 * @swagger
 * /api/v1/features/{id}:
 *   get:
 *     summary: Get feature by ID
 *     tags:
 *       - Features
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feature found
 *       404:
 *         description: Feature not found
 *
 *   put:
 *     summary: Update feature
 *     tags:
 *       - Features
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
 *               - feature_name
 *               - description
 *             properties:
 *               feature_name:
 *                 type: string
 *                 example: Sunroof
 *               description:
 *                 type: string
 *                 example: Panoramic sunroof
 *     responses:
 *       200:
 *         description: Feature updated successfully
 *       404:
 *         description: Feature not found
 *
 *   delete:
 *     summary: Delete feature
 *     tags:
 *       - Features
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Feature deleted successfully
 *       404:
 *         description: Feature not found
 */