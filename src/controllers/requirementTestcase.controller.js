const service =
  require('../services/requirementTestcase.service');

async function createRequirementTestcase(
  req,
  res,
  next
) {
  try {
    const {
      testcase,
      requirement_id,
      created_user_id
    } = req.body;

    if (
      !testcase ||
      !requirement_id ||
      !created_user_id
    ) {
      return res.status(400).json({
        error:
          'testcase, requirement_id and created_user_id are required'
      });
    }

    const id =
      await service.createRequirementTestcase(
        testcase,
        requirement_id,
        created_user_id
      );

    res.status(201).json({
      message:
        'Requirement testcase created successfully',
      id
    });
  } catch (error) {
    next(error);
  }
}

async function getAllRequirementTestcases(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getAllRequirementTestcases();

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function getRequirementTestcaseById(
  req,
  res,
  next
) {
  try {
    const data =
      await service.getRequirementTestcaseById(
        req.params.id
      );

    if (!data) {
      return res.status(404).json({
        error:
          'Requirement testcase not found'
      });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
}

async function updateRequirementTestcase(
  req,
  res,
  next
) {
  try {
    const {
      testcase,
      requirement_id
    } = req.body;

    if (!testcase || !requirement_id) {
      return res.status(400).json({
        error:
          'testcase and requirement_id are required'
      });
    }

    const affectedRows =
      await service.updateRequirementTestcase(
        req.params.id,
        testcase,
        requirement_id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Requirement testcase not found'
      });
    }

    res.json({
      message:
        'Requirement testcase updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

async function deleteRequirementTestcase(
  req,
  res,
  next
) {
  try {
    const affectedRows =
      await service.deleteRequirementTestcase(
        req.params.id
      );

    if (affectedRows === 0) {
      return res.status(404).json({
        error:
          'Requirement testcase not found'
      });
    }

    res.json({
      message:
        'Requirement testcase deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createRequirementTestcase,
  getAllRequirementTestcases,
  getRequirementTestcaseById,
  updateRequirementTestcase,
  deleteRequirementTestcase
};