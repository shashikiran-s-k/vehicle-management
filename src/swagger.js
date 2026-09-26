const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Vehicle Management API',
      version: '1.0.0',
      description:
        'REST API for vehicle models, features, requirements, ECUs, suppliers, releases, tasks and test cases.'
    },

    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local development'
      },
      {
        url: 'https://vehicle-management-api-lfcbjlsgyq-el.a.run.app',
        description: 'Cloud Run'
      }
    ],

    tags: [
      {
        name: 'Users',
        description: 'User management APIs'
      },
      {
        name: 'Vehicle Models',
        description: 'Vehicle model APIs'
      },
      {
        name: 'Features',
        description: 'Feature APIs'
      },
      {
        name: 'Model Features',
        description: 'Vehicle model and feature mapping APIs'
      },
      {
        name: 'ECUs',
        description: 'ECU APIs'
      },
      {
        name: 'Suppliers',
        description: 'Supplier APIs'
      },
      {
        name: 'ECU Suppliers',
        description: 'ECU and supplier mapping APIs'
      },
      {
        name: 'Feature ECU Suppliers',
        description: 'Feature ECU supplier mapping APIs'
      },
      {
        name: 'Feature Requirements',
        description: 'Feature requirement APIs'
      },
      {
        name: 'ECU Supplier Releases',
        description: 'ECU supplier release APIs'
      },
      {
        name: 'Release Requirement Updates',
        description: 'Release requirement mapping APIs'
      },
      {
        name: 'Requirement Test Cases',
        description: 'Requirement test case APIs'
      },
      {
        name: 'Testcase Reports',
        description: 'Testcase report APIs'
      },
      {
        name: 'Feature Users',
        description: 'Feature user assignment APIs'
      },
      {
        name: 'Requirement Tasks',
        description: 'Requirement task APIs'
      },
      {
        name: 'Task Assignments',
        description: 'Task assignment APIs'
      },
      {
        name: 'Task Comments',
        description: 'Task comment APIs'
      }
    ],

    components: {
      schemas: {

        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'John'
            },
            email_id: {
              type: 'string',
              example: 'john@example.com'
            },
            role: {
              type: 'string',
              example: 'ENGINEER'
            }
          }
        },

        VehicleModel: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            model_name: {
              type: 'string',
              example: 'Model X'
            },
            vehicle_type: {
              type: 'string',
              example: 'SUV'
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        Feature: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            feature_name: {
              type: 'string',
              example: 'Sunroof'
            },
            description: {
              type: 'string',
              example: 'Panoramic sunroof'
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        ModelFeature: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            model_id: {
              type: 'integer',
              example: 1
            },
            feature_id: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'string',
              example: 'ACTIVE'
            },
            updated_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        ECU: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Engine ECU'
            },
            description: {
              type: 'string',
              example: 'Engine controller'
            },
            created_at: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        Supplier: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            supplier_name: {
              type: 'string',
              example: 'Bosch'
            },
            description: {
              type: 'string',
              example: 'ECU supplier'
            },
            address: {
              type: 'string',
              example: 'Bangalore'
            },
            created_at: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        EcuSupplier: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            ecu_id: {
              type: 'integer',
              example: 1
            },
            supplier_id: {
              type: 'integer',
              example: 1
            },
            updated_at: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        FeatureEcuSupplier: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            model_feature_id: {
              type: 'integer',
              example: 1
            },
            ecu_supplier_id: {
              type: 'integer',
              example: 1
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        FeatureRequirement: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            requirement: {
              type: 'string',
              example: 'Vehicle should support automatic emergency braking'
            },
            model_feature_id: {
              type: 'integer',
              example: 1
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'string',
              example: 'OPEN'
            }
          }
        },

        EcuSupplierRelease: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            version_number: {
              type: 'string',
              example: 'V1.0.0'
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'string',
              example: 'DRAFT'
            },
            comments: {
              type: 'string',
              example: 'Initial ECU supplier release'
            }
          }
        },

        ReleaseRequirementUpdate: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            release_id: {
              type: 'integer',
              example: 1
            },
            requirement_id: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'string',
              example: 'IMPLEMENTED'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        RequirementTestcase: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            testcase: {
              type: 'string',
              example: 'Verify automatic emergency braking'
            },
            requirement_id: {
              type: 'integer',
              example: 1
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        TestcaseReport: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            testcase_id: {
              type: 'integer',
              example: 1
            },
            release_id: {
              type: 'integer',
              example: 1
            },
            comment: {
              type: 'string',
              example: 'Test completed successfully'
            },
            status: {
              type: 'string',
              example: 'PASS'
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        FeatureUser: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            model_feature_id: {
              type: 'integer',
              example: 1
            },
            user_id: {
              type: 'integer',
              example: 2
            },
            assigned_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        RequirementTask: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            requirement_id: {
              type: 'integer',
              example: 1
            },
            task_name: {
              type: 'string',
              example: 'Develop ECU logic'
            },
            status: {
              type: 'string',
              example: 'OPEN'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            }
          }
        },

        TaskAssignment: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            requirement_tasks_id: {
              type: 'integer',
              example: 1
            },
            assignee_user_id: {
              type: 'integer',
              example: 2
            },
            created_date: {
              type: 'string',
              format: 'date-time'
            },
            created_user_id: {
              type: 'integer',
              example: 1
            }
          }
        },

        TaskComment: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            requirement_tasks_id: {
              type: 'integer',
              example: 1
            },
            comments: {
              type: 'string',
              example: 'Development completed and ready for testing.'
            },
            commented_user_id: {
              type: 'integer',
              example: 2
            },
            created_user_id: {
              type: 'integer',
              example: 2
            }
          }
        }

      }
    }
  },

  apis: [
  './src/docs/*.swagger.js'
]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;