const { body } = require('express-validator');

const locationValidationRules = [
  body('name')
    .notEmpty().withMessage('Location name is required.'),
  
  body('description')
    .notEmpty().withMessage('Location description is required.'),
  
  body('category')
    .notEmpty().withMessage('Location category is required.'),
  
  body('rating')
    .notEmpty().withMessage('Location rating is required.')
    .isFloat({ min: 0 }).withMessage('Rating must be a non-negative number.'),
  
  body('review_count')
    .notEmpty().withMessage('Review count is required.')
    .isInt({ min: 0 }).withMessage('Review count must be a non-negative integer.'),
  
  body('latitude')
    .notEmpty().withMessage('Latitude is required.')
    .isDecimal().withMessage('Latitude must be a decimal number.'),
  
  body('longitude')
    .notEmpty().withMessage('Longitude is required.')
    .isDecimal().withMessage('Longitude must be a decimal number.'),
];

module.exports = { locationValidationRules };
