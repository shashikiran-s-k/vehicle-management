const service =
  require('../services/testcaseReport.service');

async function createTestcaseReport(req, res, next) {
  try {
    const {
      testcase_id,
      release_id,
      comment,
      status,
      created_user_id
    } = req.body;

    if (
      !testcase_id ||
      !release_id ||
      !comment ||
      !status ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'testcase_id, release_id, comment, status and created_user_id are required'
      });
    }

    const id =
      await service.createTestcaseReport(
        testcase_id,
        release_id,
        comment,
        status,
        created_user_id
      );

    res.status(201).json({
      message:
        'Testcase report created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllTestcaseReports(req, res, next) {
  try {
    const data =
      await service.getAllTestcaseReports();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getTestcaseReportById(req, res, next) {
  try {
    const data =
      await service.getTestcaseReportById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error: 'Testcase report not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateTestcaseReport(req, res, next) {
  try {
    const {
      testcase_id,
      release_id,
      comment,
      status
    } = req.body;

    if (
      !testcase_id ||
      !release_id ||
      !comment ||
      !status
    ) {
      return res.status(400).json({
        error:
          'testcase_id, release_id, comment and status are required'
      });
    }

    const affectedRows =
      await service.updateTestcaseReport(
        req.params.id,
        testcase_id,
        release_id,
        comment,
        status
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Testcase report not found'
      });
    }

    res.json({
      message:
        'Testcase report updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteTestcaseReport(req, res, next) {
  try {
    const affectedRows =
      await service.deleteTestcaseReport(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error: 'Testcase report not found'
      });
    }

    res.json({
      message:
        'Testcase report deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTestcaseReport,
  getAllTestcaseReports,
  getTestcaseReportById,
  updateTestcaseReport,
  deleteTestcaseReport
};