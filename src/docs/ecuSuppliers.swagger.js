/**
 * @swagger
 * /api/v1/ecu-suppliers:
 *   post:
 *     summary: Create ECU-supplier mapping
 *     tags:
 *       - ECU Suppliers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ecu_id
 *               - supplier_id
 *               - created_user_id
 *             properties:
 *               ecu_id:
 *                 type: integer
 *                 example: 1
 *               supplier_id:
 *                 type: integer
 *                 example: 1
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: ECU-supplier mapping created successfully
 *
 *   get:
 *     summary: Get all ECU-supplier mappings
 *     tags:
 *       - ECU Suppliers
 *     responses:
 *       200:
 *         description: List of ECU-supplier mappings
 */

/**
 * @swagger
 * /api/v1/ecu-suppliers/{id}:
 *   get:
 *     summary: Get ECU-supplier mapping by ID
 *     tags:
 *       - ECU Suppliers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mapping found
 *
 *   put:
 *     summary: Update ECU-supplier mapping
 *     tags:
 *       - ECU Suppliers
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
 *               - ecu_id
 *               - supplier_id
 *             properties:
 *               ecu_id:
 *                 type: integer
 *                 example: 1
 *               supplier_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Mapping updated successfully
 *
 *   delete:
 *     summary: Delete ECU-supplier mapping
 *     tags:
 *       - ECU Suppliers
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