const calculatorData = require('../config/calculatorData');

const calculatorController = {
  // Get complete calculator configuration
  getConfig: (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
        data: calculatorData
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get calculator configuration',
        error: error.message
      });
    }
  },

  // Calculate project estimate
  calculateEstimate: (req, res) => {
    try {
      const { platformId, featureIds, designId, teamId, additionalServices } = req.body;

      // Validation
      if (!platformId || !designId || !teamId) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing required fields: platformId, designId, teamId'
        });
      }

      // Find selected options
      const platform = calculatorData.platforms.find(p => p.id === platformId);
      const design = calculatorData.designComplexity.find(d => d.id === designId);
      const team = calculatorData.teamComposition.find(t => t.id === teamId);

      if (!platform || !design || !team) {
        return res.status(400).json({
          status: 'error',
          message: 'Invalid platform, design, or team selection'
        });
      }

      // Calculate base cost and time
      let totalCost = platform.baseCost;
      let totalTime = platform.baseTime;
      const selectedFeatures = [];

      // Add feature costs
      if (featureIds && featureIds.length > 0) {
        featureIds.forEach(featureId => {
          const feature = calculatorData.features.find(f => f.id === featureId);
          if (feature) {
            totalCost += feature.cost;
            totalTime += feature.time;
            selectedFeatures.push(feature);
          }
        });
      }

      // Add additional services
      const selectedServices = [];
      if (additionalServices && additionalServices.length > 0) {
        additionalServices.forEach(serviceId => {
          const service = calculatorData.additionalServices.find(s => s.id === serviceId);
          if (service) {
            totalCost += service.cost;
            selectedServices.push(service);
          }
        });
      }

      // Apply multipliers
      const baseCostWithFeatures = totalCost;
      totalCost = Math.round(totalCost * design.multiplier * team.multiplier);
      totalTime = Math.round(totalTime * design.multiplier * team.multiplier);

      // Calculate breakdown
      const breakdown = {
        basePlatform: {
          name: platform.name,
          cost: platform.baseCost,
          time: platform.baseTime
        },
        features: selectedFeatures.map(f => ({
          name: f.name,
          cost: f.cost,
          time: f.time
        })),
        additionalServices: selectedServices.map(s => ({
          name: s.name,
          cost: s.cost
        })),
        multipliers: {
          design: {
            name: design.name,
            multiplier: design.multiplier
          },
          team: {
            name: team.name,
            multiplier: team.multiplier
          }
        },
        subtotal: baseCostWithFeatures,
        total: totalCost,
        totalTime: totalTime
      };

      res.status(200).json({
        status: 'success',
        data: {
          estimate: {
            totalCost,
            totalTime,
            breakdown
          },
          selections: {
            platform,
            features: selectedFeatures,
            design,
            team,
            additionalServices: selectedServices
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to calculate estimate',
        error: error.message
      });
    }
  },

  // Get available platforms
  getPlatforms: (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
        data: calculatorData.platforms
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get platforms',
        error: error.message
      });
    }
  },

  // Get all features
  getFeatures: (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
        data: calculatorData.features
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get features',
        error: error.message
      });
    }
  },

  // Get features by category
  getFeaturesByCategory: (req, res) => {
    try {
      const { category } = req.params;
      const features = calculatorData.features.filter(f => 
        f.category.toLowerCase() === category.toLowerCase()
      );

      res.status(200).json({
        status: 'success',
        data: features
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get features by category',
        error: error.message
      });
    }
  },

  // Get design complexity options
  getDesignOptions: (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
        data: calculatorData.designComplexity
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get design options',
        error: error.message
      });
    }
  },

  // Get team composition options
  getTeamOptions: (req, res) => {
    try {
      res.status(200).json({
        status: 'success',
        data: calculatorData.teamComposition
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to get team options',
        error: error.message
      });
    }
  }
};

module.exports = calculatorController;