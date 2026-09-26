/**
 * @swagger
 * /api/v1/feature-ecu-suppliers:
 *   post:
 *     summary: Create feature ECU supplier mapping
 *     tags:
 *       - Feature ECU Suppliers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model_feature_id
 *               - ecu_supplier_id
 *               - created_user_id
 *             properties:
 *               model_feature_id:
 *                 type: integer
 *                 example: 1
 *               ecu_supplier_id:
 *                 type: integer
 *                 example: 1
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Mapping created successfully
 *
 *   get:
 *     summary: Get all feature ECU supplier mappings
 *     tags:
 *       - Feature ECU Suppliers
 *     responses:
 *       200:
 *         description: List of mappings
 */

/**
 * @swagger
 * /api/v1/feature-ecu-suppliers/{id}:
 *   get:
 *     summary: Get feature ECU supplier mapping by ID
 *     tags:
 *       - Feature ECU Suppliers
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
 *     summary: Update feature ECU supplier mapping
 *     tags:
 *       - Feature ECU Suppliers
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
 *               - ecu_supplier_id
 *             properties:
 *               model_feature_id:
 *                 type: integer
 *                 example: 1
 *               ecu_supplier_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Mapping updated successfully
 *
 *   delete:
 *     summary: Delete feature ECU supplier mapping
 *     tags:
 *       - Feature ECU Suppliers
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