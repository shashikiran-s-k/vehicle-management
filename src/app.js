const express = require('express');
const userRoutes = require('./routes/user.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

app.get('/', (req, res) => {
  res.send('Vehicle Management API is running');
});

app.use('/api/v1/users', userRoutes);

const vehicleModelRoutes =
  require('./routes/vehicleModel.routes');

const featureRoutes =
  require('./routes/feature.routes');

const modelFeatureRoutes =
  require('./routes/modelFeature.routes');

app.use(
  '/api/v1/vehicle-models',
  vehicleModelRoutes
);

app.use(
  '/api/v1/features',
  featureRoutes
);

app.use(
  '/api/v1/model-features',
  modelFeatureRoutes
);
const ecuRoutes =
  require('./routes/ecu.routes');

const supplierRoutes =
  require('./routes/supplier.routes');

const ecuSupplierRoutes =
  require('./routes/ecuSupplier.routes');

const featureEcuSupplierRoutes =
  require('./routes/featureEcuSupplier.routes');
app.use(
  '/api/v1/ecus',
  ecuRoutes
);

app.use(
  '/api/v1/suppliers',
  supplierRoutes
);

app.use(
  '/api/v1/ecu-suppliers',
  ecuSupplierRoutes
);

app.use(
  '/api/v1/feature-ecu-suppliers',
  featureEcuSupplierRoutes
);
const featureRequirementRoutes =
  require('./routes/featureRequirement.routes');

const ecuSupplierReleaseRoutes =
  require('./routes/ecuSupplierRelease.routes');

const releaseRequirementUpdateRoutes =
  require('./routes/releaseRequirementUpdate.routes');

const requirementTestcaseRoutes =
  require('./routes/requirementTestcase.routes');

const testcaseReportRoutes =
  require('./routes/testcaseReport.routes');

  app.use(
  '/api/v1/feature-requirements',
  featureRequirementRoutes
);

app.use(
  '/api/v1/ecu-supplier-releases',
  ecuSupplierReleaseRoutes
);

app.use(
  '/api/v1/release-requirement-updates',
  releaseRequirementUpdateRoutes
);

app.use(
  '/api/v1/requirement-testcases',
  requirementTestcaseRoutes
);

app.use(
  '/api/v1/testcase-reports',
  testcaseReportRoutes
);



// Error-handling middleware
app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    error: 'Internal server error'
  });
});

module.exports = app;