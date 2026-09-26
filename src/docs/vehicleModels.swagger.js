/**
 * @swagger
 * /api/v1/vehicle-models:
 *   post:
 *     summary: Create a vehicle model
 *     tags:
 *       - Vehicle Models
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model_name
 *               - vehicle_type
 *               - created_user_id
 *             properties:
 *               model_name:
 *                 type: string
 *                 example: Model X
 *               vehicle_type:
 *                 type: string
 *                 example: SUV
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Vehicle model created successfully
 *       400:
 *         description: Invalid request
 *
 *   get:
 *     summary: Get all vehicle models
 *     tags:
 *       - Vehicle Models
 *     responses:
 *       200:
 *         description: List of vehicle models
 */

/**
 * @swagger
 * /api/v1/vehicle-models/{id}:
 *   get:
 *     summary: Get vehicle model by ID
 *     tags:
 *       - Vehicle Models
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vehicle model found
 *       404:
 *         description: Vehicle model not found
 *
 *   put:
 *     summary: Update vehicle model
 *     tags:
 *       - Vehicle Models
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
 *               - model_name
 *               - vehicle_type
 *             properties:
 *               model_name:
 *                 type: string
 *                 example: Model X
 *               vehicle_type:
 *                 type: string
 *                 example: SUV
 *     responses:
 *       200:
 *         description: Vehicle model updated successfully
 *       404:
 *         description: Vehicle model not found
 *
 *   delete:
 *     summary: Delete vehicle model
 *     tags:
 *       - Vehicle Models
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vehicle model deleted successfully
 *       404:
 *         description: Vehicle model not found
 */