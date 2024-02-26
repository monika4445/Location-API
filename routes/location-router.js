const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/location-controller');
const { locationValidationRules } = require('../middlewares/validations/location-validation');

router.get('/api/locations', LocationController.getAllLocations);
router.get('/api/locations/:id', LocationController.getLocation);
router.post('/api/locations', locationValidationRules, LocationController.createLocation);
router.patch('/api/locations/:id', LocationController.updateLocation);
router.patch('/api/locations', LocationController.updateLocationsByCategory);
router.delete('/api/locations/:id', LocationController.deleteLocation);

/**
 * @swagger
 * components:
 *   schemas:
 *     LocationUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         rating:
 *           type: number
 *         review_count:
 *           type: integer
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *       required:
 *         - name
 *         - description
 *         - category
 *         - rating
 *         - review_count
 *         - latitude
 *         - longitude
 */


/**
 * @swagger
 * /api/locations:
 *   post:
 *     summary: Creating a Location Document
 *     description: Endpoint for creating a new location document.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               rating:
 *                 type: number
 *               review_count:
 *                 type: integer
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Location document created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 location_id:
 *                   type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /api/locations:
 *   get:
 *     summary: Paginated Retrieval of All Documents
 *     description: Endpoint for retrieving all location documents.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination.
 *       - in: query
 *         name: page_size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of locations per page.
 *     responses:
 *       '200':
 *         description: Paginated list of locations with details.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 */

/**
 * @swagger
 * /api/locations/{id}:
 *   get:
 *     summary: Retrieval of a Specific Location Document by ID
 *     description: Endpoint for retrieving a specific location document by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Unique identifier of the location.
 *     responses:
 *       '200':
 *         description: Detailed information about the specific location.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Location'
 *       '404':
 *         description: Location not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location not found
 */

/**
 * @swagger
 * /api/locations/{id}:
 *   patch:
 *     summary: Updating a Location Document by Its ID
 *     description: Endpoint for updating a location document by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Unique identifier of the location.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocationUpdate'
 *     responses:
 *       '200':
 *         description: Location updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location updated successfully
 *       '404':
 *         description: Location not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location not found
 */

/**
 * @swagger
 * /api/locations:
 *   patch:
 *     summary: Updating Location Documents by Their Category
 *     description: Endpoint for updating multiple location documents by their category.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: The category of locations to be updated.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocationUpdate'
 *     responses:
 *       '200':
 *         description: Locations updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Locations updated successfully
 *       '500':
 *         description: Failed to update locations by category.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to update locations by category
 */

/**
 * @swagger
 * /api/locations/{id}:
 *   delete:
 *     summary: Deleting a Location Document by Its ID
 *     description: Endpoint for deleting a location document by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Unique identifier of the location.
 *     responses:
 *       '200':
 *         description: Location deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location deleted successfully
 *       '404':
 *         description: Location not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location not found
 */

/**
*  @swagger
* components:
*   schemas:
*     Location:
*       type: object
*       properties:
*         id:
*           type: integer
*         name:
*           type: string
*         description:
*           type: string
*         category:
*           type: string
*         rating:
*           type: number
*         review_count:
*           type: integer
*         latitude:
*           type: number
*         longitude:
*           type: number
*         createdAt:
*           type: string
*           format: date-time
*         updatedAt:
*           type: string
*           format: date-time
*       required:
*         - name
*         - description
*         - category
*         - rating
*         - review_count
*         - latitude
*         - longitude
*         - createdAt
*         - updatedAt

 */

module.exports = router;