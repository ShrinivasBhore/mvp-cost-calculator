const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// GET /api/calculator/config - Get calculator configuration
router.get('/config', calculatorController.getConfig);

// POST /api/calculator/estimate - Calculate project estimate
router.post('/estimate', calculatorController.calculateEstimate);

// GET /api/calculator/platforms - Get available platforms
router.get('/platforms', calculatorController.getPlatforms);

// GET /api/calculator/features - Get available features
router.get('/features', calculatorController.getFeatures);

// GET /api/calculator/features/:category - Get features by category
router.get('/features/:category', calculatorController.getFeaturesByCategory);

// GET /api/calculator/design-options - Get design complexity options
router.get('/design-options', calculatorController.getDesignOptions);

// GET /api/calculator/team-options - Get team composition options
router.get('/team-options', calculatorController.getTeamOptions);

module.exports = router;