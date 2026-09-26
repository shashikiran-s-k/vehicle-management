/**
 * @swagger
 * /api/v1/suppliers:
 *   post:
 *     summary: Create a supplier
 *     tags:
 *       - Suppliers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - supplier_name
 *               - description
 *               - address
 *               - created_user_id
 *             properties:
 *               supplier_name:
 *                 type: string
 *                 example: Bosch
 *               description:
 *                 type: string
 *                 example: ECU supplier
 *               address:
 *                 type: string
 *                 example: Bangalore
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Supplier created successfully
 *
 *   get:
 *     summary: Get all suppliers
 *     tags:
 *       - Suppliers
 *     responses:
 *       200:
 *         description: List of suppliers
 */

/**
 * @swagger
 * /api/v1/suppliers/{id}:
 *   get:
 *     summary: Get supplier by ID
 *     tags:
 *       - Suppliers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Supplier found
 *       404:
 *         description: Supplier not found
 *
 *   put:
 *     summary: Update supplier
 *     tags:
 *       - Suppliers
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
 *               - supplier_name
 *               - description
 *               - address
 *             properties:
 *               supplier_name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Supplier updated successfully
 *
 *   delete:
 *     summary: Delete supplier
 *     tags:
 *       - Suppliers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Supplier deleted successfully
 */