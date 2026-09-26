/**
 * @swagger
 * /api/v1/ecus:
 *   post:
 *     summary: Create an ECU
 *     tags:
 *       - ECUs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - created_user_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Engine ECU
 *               description:
 *                 type: string
 *                 example: Engine controller
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: ECU created successfully
 *
 *   get:
 *     summary: Get all ECUs
 *     tags:
 *       - ECUs
 *     responses:
 *       200:
 *         description: List of ECUs
 */

/**
 * @swagger
 * /api/v1/ecus/{id}:
 *   get:
 *     summary: Get ECU by ID
 *     tags:
 *       - ECUs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ECU found
 *       404:
 *         description: ECU not found
 *
 *   put:
 *     summary: Update ECU
 *     tags:
 *       - ECUs
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
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: Engine ECU
 *               description:
 *                 type: string
 *                 example: Engine controller
 *     responses:
 *       200:
 *         description: ECU updated successfully
 *
 *   delete:
 *     summary: Delete ECU
 *     tags:
 *       - ECUs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ECU deleted successfully
 */