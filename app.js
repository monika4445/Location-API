const express = require('express');
const app = express();
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const locationRouter = require('./routes/location-router');

require('dotenv').config();

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/locations:
 * get: 
 *      summary: This api checks ig get method works 
 *      description: This api checks ig get method works 
 * responses: 
 * 200:
 * to test get method
 */

app.use(express.urlencoded({ extended: true}));
app.use(cors()); 
app.use(express.json());

app.use(locationRouter);

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

