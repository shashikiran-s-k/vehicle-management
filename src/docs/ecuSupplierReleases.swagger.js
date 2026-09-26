/**
 * @swagger
 * /api/v1/ecu-supplier-releases:
 *   post:
 *     summary: Create ECU supplier release
 *     tags:
 *       - ECU Supplier Releases
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - version_number
 *               - created_user_id
 *               - status
 *             properties:
 *               version_number:
 *                 type: string
 *                 example: V1.0.0
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: DRAFT
 *               comments:
 *                 type: string
 *                 example: Initial ECU supplier release
 *     responses:
 *       201:
 *         description: Release created successfully
 *
 *   get:
 *     summary: Get all ECU supplier releases
 *     tags:
 *       - ECU Supplier Releases
 *     responses:
 *       200:
 *         description: List of releases
 */

/**
 * @swagger
 * /api/v1/ecu-supplier-releases/{id}:
 *   get:
 *     summary: Get ECU supplier release by ID
 *     tags:
 *       - ECU Supplier Releases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Release found
 *
 *   put:
 *     summary: Update ECU supplier release
 *     tags:
 *       - ECU Supplier Releases
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
 *             properties:
 *               version_number:
 *                 type: string
 *                 example: V1.0.1
 *               status:
 *                 type: string
 *                 example: RELEASED
 *               comments:
 *                 type: string
 *     responses:
 *       200:
 *         description: Release updated successfully
 *
 *   delete:
 *     summary: Delete ECU supplier release
 *     tags:
 *       - ECU Supplier Releases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Release deleted successfully
 */