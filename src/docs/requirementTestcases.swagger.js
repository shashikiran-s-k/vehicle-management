/**
 * @swagger
 * /api/v1/requirement-testcases:
 *   post:
 *     summary: Create requirement testcase
 *     tags:
 *       - Requirement Test Cases
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - testcase
 *               - requirement_id
 *               - created_user_id
 *             properties:
 *               testcase:
 *                 type: string
 *                 example: Verify automatic emergency braking activates when obstacle is detected
 *               requirement_id:
 *                 type: integer
 *                 example: 1
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Requirement testcase created successfully
 *
 *   get:
 *     summary: Get all requirement testcases
 *     tags:
 *       - Requirement Test Cases
 *     responses:
 *       200:
 *         description: List of requirement testcases
 */

/**
 * @swagger
 * /api/v1/requirement-testcases/{id}:
 *   get:
 *     summary: Get requirement testcase by ID
 *     tags:
 *       - Requirement Test Cases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Requirement testcase found
 *
 *   put:
 *     summary: Update requirement testcase
 *     tags:
 *       - Requirement Test Cases
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
 *               - testcase
 *               - requirement_id
 *             properties:
 *               testcase:
 *                 type: string
 *               requirement_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Requirement testcase updated successfully
 *
 *   delete:
 *     summary: Delete requirement testcase
 *     tags:
 *       - Requirement Test Cases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Requirement testcase deleted successfully
 */