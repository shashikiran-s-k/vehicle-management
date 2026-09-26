/**
 * @swagger
 * /api/v1/testcase-reports:
 *   post:
 *     summary: Create testcase report
 *     tags:
 *       - Testcase Reports
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - testcase_id
 *               - release_id
 *               - comment
 *               - status
 *               - created_user_id
 *             properties:
 *               testcase_id:
 *                 type: integer
 *                 example: 1
 *               release_id:
 *                 type: integer
 *                 example: 1
 *               comment:
 *                 type: string
 *                 example: Test completed successfully
 *               status:
 *                 type: string
 *                 example: PASS
 *               created_user_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Testcase report created successfully
 *
 *   get:
 *     summary: Get all testcase reports
 *     tags:
 *       - Testcase Reports
 *     responses:
 *       200:
 *         description: List of testcase reports
 */

/**
 * @swagger
 * /api/v1/testcase-reports/{id}:
 *   get:
 *     summary: Get testcase report by ID
 *     tags:
 *       - Testcase Reports
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Testcase report found
 *
 *   put:
 *     summary: Update testcase report
 *     tags:
 *       - Testcase Reports
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
 *               - testcase_id
 *               - release_id
 *               - comment
 *               - status
 *             properties:
 *               testcase_id:
 *                 type: integer
 *               release_id:
 *                 type: integer
 *               comment:
 *                 type: string
 *               status:
 *                 type: string
 *                 example: PASS
 *     responses:
 *       200:
 *         description: Testcase report updated successfully
 *
 *   delete:
 *     summary: Delete testcase report
 *     tags:
 *       - Testcase Reports
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Testcase report deleted successfully
 */