const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Location API',
      version: '1.0.0',
      description: 'API for managing location documents',
    },
    servers: [
      {
        url: 'http://localhost:3100',
      },
    ],
  },
  apis: ['./routes/location-router.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
