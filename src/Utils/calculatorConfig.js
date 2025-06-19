// Calculator Configuration and Utility Functions

export const CALCULATOR_CONFIG = {
  // Base costs for different platforms
  PLATFORMS: {
    web: {
      id: 'web',
      name: 'Web Application',
      description: 'Responsive web application accessible through browsers',
      baseCost: 15000,
      duration: 8,
      icon: 'monitor'
    },
    mobile: {
      id: 'mobile',
      name: 'Mobile App',
      description: 'Native mobile application for iOS and Android',
      baseCost: 20000,
      duration: 10,
      icon: 'smartphone'
    },
    both: {
      id: 'both',
      name: 'Web + Mobile',
      description: 'Complete solution with web app and mobile applications',
      baseCost: 30000,
      duration: 14,
      icon: 'both'
    }
  },

  // Feature categories and individual features
  FEATURES: {
    core: {
      category: 'Core Features',
      features: [
        {
          id: 'user_auth',
          name: 'User Authentication',
          description: 'Login, registration, password reset functionality',
          cost: 2500,
          duration: 1.5
        },
        {
          id: 'user_profiles',
          name: 'User Profiles',
          description: 'User profile management and customization',
          cost: 2000,
          duration: 1
        },
        {
          id: 'dashboard',
          name: 'Dashboard',
          description: 'Main user dashboard with key metrics and navigation',
          cost: 3000,
          duration: 2
        },
        {
          id: 'search',
          name: 'Search Functionality',
          description: 'Advanced search with filters and sorting',
          cost: 2500,
          duration: 1.5
        }
      ]
    },
    communication: {
      category: 'Communication',
      features: [
        {
          id: 'messaging',
          name: 'In-App Messaging',
          description: 'Real-time messaging between users',
          cost: 4000,
          duration: 2.5
        },
        {
          id: 'notifications',
          name: 'Push Notifications',
          description: 'Push notifications for mobile and web',
          cost: 2000,
          duration: 1
        },
        {
          id: 'email_system',
          name: 'Email System',
          description: 'Automated email notifications and newsletters',
          cost: 1500,
          duration: 1
        },
        {
          id: 'chat_support',
          name: 'Live Chat Support',
          description: 'Customer support chat integration',
          cost: 3000,
          duration: 2
        }
      ]
    },
    commerce: {
      category: 'E-Commerce',
      features: [
        {
          id: 'payment_gateway',
          name: 'Payment Gateway',
          description: 'Secure payment processing with multiple options',
          cost: 3500,
          duration: 2
        },
        {
          id: 'shopping_cart',
          name: 'Shopping Cart',
          description: 'Add to cart, checkout, and order management',
          cost: 3000,
          duration: 2
        },
        {
          id: 'inventory',
          name: 'Inventory Management',
          description: 'Track and manage product inventory',
          cost: 4000,
          duration: 2.5
        },
        {
          id: 'order_tracking',
          name: 'Order Tracking',
          description: 'Real-time order status and tracking',
          cost: 2500,
          duration: 1.5
        }
      ]
    },
    social: {
      category: 'Social Features',
      features: [
        {
          id: 'social_login',
          name: 'Social Media Login',
          description: 'Login with Google, Facebook, Twitter, etc.',
          cost: 1500,
          duration: 1
        },
        {
          id: 'sharing',
          name: 'Social Sharing',
          description: 'Share content to social media platforms',
          cost: 1000,
          duration: 0.5
        },
        {
          id: 'reviews',
          name: 'Reviews & Ratings',
          description: 'User reviews and rating system',
          cost: 2500,
          duration: 1.5
        },
        {
          id: 'follow_system',
          name: 'Follow/Friend System',
          description: 'Connect users with follow/friend functionality',
          cost: 3000,
          duration: 2
        }
      ]
    },
    analytics: {
      category: 'Analytics & Reporting',
      features: [
        {
          id: 'analytics',
          name: 'Analytics Dashboard',
          description: 'User behavior and app performance analytics',
          cost: 3500,
          duration: 2
        },
        {
          id: 'reports',
          name: 'Custom Reports',
          description: 'Generate and export custom reports',
          cost: 2500,
          duration: 1.5
        },
        {
          id: 'ab_testing',
          name: 'A/B Testing',
          description: 'Test different versions of features',
          cost: 2000,
          duration: 1
        }
      ]
    }
  },

  // Design complexity options
  DESIGN_OPTIONS: {
    simple: {
      id: 'simple',
      name: 'Simple Design',
      description: 'Clean, minimal design with basic styling',
      multiplier: 1.0,
      features: ['Basic UI components', 'Standard layouts', 'Simple animations']
    },
    standard: {
      id: 'standard',
      name: 'Standard Design',
      description: 'Professional design with custom elements',
      multiplier: 1.3,
      features: ['Custom UI components', 'Responsive design', 'Smooth animations', 'Brand consistency']
    },
    complex: {
      id: 'complex',
      name: 'Complex Design',
      description: 'Premium design with advanced interactions',
      multiplier: 1.7,
      features: ['Advanced UI/UX', 'Custom illustrations', 'Complex animations', 'Interactive elements', 'Premium look & feel']
    }
  },

  // Team composition options
  TEAM_OPTIONS: {
    small: {
      id: 'small',
      name: 'Small Team',
      description: '2-3 developers, longer timeline',
      multiplier: 1.2,
      teamSize: '2-3 people',
      timeline: 'Longer development time'
    },
    medium: {
      id: 'medium',
      name: 'Medium Team',
      description: '4-6 developers, balanced approach',
      multiplier: 1.0,
      teamSize: '4-6 people',
      timeline: 'Standard development time'
    },
    large: {
      id: 'large',
      name: 'Large Team',
      description: '7+ developers, faster delivery',
      multiplier: 0.8,
      teamSize: '7+ people',
      timeline: 'Faster development time'
    }
  }
};

// Utility functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const calculateEstimate = (platform, features, design, team) => {
  // Base cost from platform
  const baseCost = CALCULATOR_CONFIG.PLATFORMS[platform.id].baseCost;
  
  // Calculate features cost
  const featuresCost = features.reduce((total, feature) => total + feature.cost, 0);
  
  // Calculate subtotal before multipliers
  const subtotal = baseCost + featuresCost;
  
  // Apply design multiplier
  const designMultiplier = CALCULATOR_CONFIG.DESIGN_OPTIONS[design.id].multiplier;
  
  // Apply team multiplier
  const teamMultiplier = CALCULATOR_CONFIG.TEAM_OPTIONS[team.id].multiplier;
  
  // Calculate total cost
  const totalCost = Math.round(subtotal * designMultiplier * teamMultiplier);
  
  // Calculate development time
  const baseDuration = CALCULATOR_CONFIG.PLATFORMS[platform.id].duration;
  const featuresDuration = features.reduce((total, feature) => total + feature.duration, 0);
  const totalDuration = Math.round((baseDuration + featuresDuration) * teamMultiplier);
  
  return {
    baseCost,
    featuresCost,
    subtotal,
    designMultiplier,
    teamMultiplier,
    totalCost,
    developmentTime: totalDuration,
    breakdown: {
      platform: {
        name: platform.name,
        cost: baseCost
      },
      features: features.map(feature => ({
        name: feature.name,
        cost: feature.cost
      })),
      design: {
        name: design.name,
        multiplier: designMultiplier
      },
      team: {
        name: team.name,
        multiplier: teamMultiplier
      }
    }
  };
};

export const getAllFeatures = () => {
  const allFeatures = [];
  Object.values(CALCULATOR_CONFIG.FEATURES).forEach(category => {
    category.features.forEach(feature => {
      allFeatures.push({
        ...feature,
        category: category.category
      });
    });
  });
  return allFeatures;
};

export const getFeaturesByCategory = () => {
  return CALCULATOR_CONFIG.FEATURES;
};

export const validateSelections = (platform, features, design, team) => {
  const errors = [];
  
  if (!platform) {
    errors.push('Platform selection is required');
  }
  
  if (!features || features.length === 0) {
    errors.push('At least one feature must be selected');
  }
  
  if (!design) {
    errors.push('Design complexity selection is required');
  }
  
  if (!team) {
    errors.push('Team composition selection is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const generateEstimateReport = (estimate, selections) => {
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      platform: selections.platform.name,
      totalCost: estimate.totalCost,
      developmentTime: estimate.developmentTime,
      featuresCount: selections.features.length
    },
    breakdown: {
      baseCost: estimate.baseCost,
      featuresCost: estimate.featuresCost,
      designMultiplier: estimate.designMultiplier,
      teamMultiplier: estimate.teamMultiplier
    },
    selections: {
      platform: selections.platform,
      features: selections.features,
      design: selections.design,
      team: selections.team
    },
    recommendations: generateRecommendations(selections, estimate)
  };
  
  return report;
};

const generateRecommendations = (selections, estimate) => {
  const recommendations = [];
  
  // Cost optimization recommendations
  if (estimate.totalCost > 50000) {
    recommendations.push({
      type: 'cost_optimization',
      title: 'Consider MVP Features',
      description: 'Your current selection might be quite comprehensive. Consider starting with core features and adding more in future iterations.'
    });
  }
  
  // Timeline recommendations
  if (estimate.developmentTime > 16) {
    recommendations.push({
      type: 'timeline_optimization',
      title: 'Phased Development',
      description: 'Consider breaking down the project into phases to get to market faster and gather user feedback early.'
    });
  }
  
  // Feature recommendations
  if (selections.features.length < 3) {
    recommendations.push({
      type: 'feature_suggestion',
      title: 'Consider Essential Features',
      description: 'Your MVP might benefit from additional core features like user authentication or analytics.'
    });
  }
  
  return recommendations;
};

export default CALCULATOR_CONFIG;