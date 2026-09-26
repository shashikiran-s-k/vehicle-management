/**
 * @swagger
 * /api/v1/release-requirement-updates:
 *   post:
 *     summary: Create release requirement update
 *     tags:
 *       - Release Requirement Updates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - release_id
 *               - requirement_id
 *               - status
 *               - created_user_id
 *             properties:
 *               release_id:
 *                 type: integer
 *                 example: 1
 *               requirement_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: IMPLEMENTED
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Release requirement update created successfully
 *
 *   get:
 *     summary: Get all release requirement updates
 *     tags:
 *       - Release Requirement Updates
 *     responses:
 *       200:
 *         description: List of release requirement updates
 */

/**
 * @swagger
 * /api/v1/release-requirement-updates/{id}:
 *   get:
 *     summary: Get release requirement update by ID
 *     tags:
 *       - Release Requirement Updates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Release requirement update found
 *       404:
 *         description: Release requirement update not found
 *
 *   put:
 *     summary: Update release requirement update
 *     tags:
 *       - Release Requirement Updates
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
 *               - release_id
 *               - requirement_id
 *               - status
 *             properties:
 *               release_id:
 *                 type: integer
 *               requirement_id:
 *                 type: integer
 *               status:
 *                 type: string
 *                 example: TESTING
 *     responses:
 *       200:
 *         description: Release requirement update updated successfully
 *
 *   delete:
 *     summary: Delete release requirement update
 *     tags:
 *       - Release Requirement Updates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Release requirement update deleted successfully
 */