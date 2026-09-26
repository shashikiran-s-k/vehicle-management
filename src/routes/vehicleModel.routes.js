const express = require('express');

const router = express.Router();

const controller =
  require('../controllers/vehicleModel.controller');

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
 */

router.post('/', controller.createVehicleModel);

/**
 * @swagger
 * /api/v1/vehicle-models:
 *   get:
 *     summary: Get all vehicle models
 *     tags:
 *       - Vehicle Models
 *     responses:
 *       200:
 *         description: List of vehicle models
 */


router.get('/', controller.getAllVehicleModels);

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
 */

router.get('/:id', controller.getVehicleModelById);

/**
 * @swagger
 * /api/v1/vehicle-models/{id}:
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
 *             properties:
 *               model_name:
 *                 type: string
 *               vehicle_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vehicle model updated successfully
 */

router.put('/:id', controller.updateVehicleModel);

/**
 * @swagger
 * /api/v1/vehicle-models/{id}:
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
 */

router.delete('/:id', controller.deleteVehicleModel);

module.exports = router;