const calculatorData = {
  platforms: [
    {
      id: 'web',
      name: 'Web Application',
      icon: '🌐',
      baseCost: 15000,
      baseTime: 8,
      description: 'Responsive web application accessible from any browser'
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: '📱',
      baseCost: 20000,
      baseTime: 12,
      description: 'Native mobile application for iOS and Android'
    },
    {
      id: 'both',
      name: 'Web + Mobile',
      icon: '🔄',
      baseCost: 30000,
      baseTime: 16,
      description: 'Complete solution with web and mobile applications'
    }
  ],

  features: [
    // Core Features
    {
      id: 'auth',
      name: 'User Authentication',
      cost: 2500,
      time: 1.5,
      category: 'Core',
      description: 'Login, registration, password recovery'
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      cost: 3000,
      time: 2,
      category: 'Core',
      description: 'Main user interface with key metrics'
    },
    {
      id: 'profile',
      name: 'User Profile',
      cost: 1500,
      time: 1,
      category: 'Core',
      description: 'User profile management and settings'
    },
    {
      id: 'search',
      name: 'Search Functionality',
      cost: 2500,
      time: 2,
      category: 'Core',
      description: 'Advanced search with filters and sorting'
    },
    {
      id: 'social',
      name: 'Social Login',
      cost: 1500,
      time: 1,
      category: 'Core',
      description: 'Login with Google, Facebook, Apple'
    },
    {
      id: 'api',
      name: 'API Integration',
      cost: 3000,
      time: 2,
      category: 'Core',
      description: 'Third-party API integrations'
    },

    // Communication Features
    {
      id: 'notifications',
      name: 'Push Notifications',
      cost: 2000,
      time: 1.5,
      category: 'Communication',
      description: 'Real-time notifications and alerts'
    },
    {
      id: 'chat',
      name: 'In-App Chat',
      cost: 4000,
      time: 3,
      category: 'Communication',
      description: 'Real-time messaging and chat system'
    },
    {
      id: 'email',
      name: 'Email Integration',
      cost: 1800,
      time: 1.5,
      category: 'Communication',
      description: 'Automated email notifications'
    },

    // Commerce Features
    {
      id: 'payments',
      name: 'Payment Integration',
      cost: 5000,
      time: 3,
      category: 'Commerce',
      description: 'Stripe, PayPal, credit card processing'
    },
    {
      id: 'subscription',
      name: 'Subscription Management',
      cost: 4500,
      time: 2.5,
      category: 'Commerce',
      description: 'Recurring billing and subscription plans'
    },
    {
      id: 'marketplace',
      name: 'Marketplace Features',
      cost: 8000,
      time: 5,
      category: 'Commerce',
      description: 'Multi-vendor marketplace functionality'
    },

    // Analytics Features
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      cost: 3500,
      time: 2.5,
      category: 'Analytics',
      description: 'User behavior and performance analytics'
    },
    {
      id: 'reporting',
      name: 'Advanced Reporting',
      cost: 4000,
      time: 3,
      category: 'Analytics',
      description: 'Custom reports and data visualization'
    },

    // Management Features
    {
      id: 'admin',
      name: 'Admin Panel',
      cost: 6000,
      time: 4,
      category: 'Management',
      description: 'Administrative interface for management'
    },
    {
      id: 'cms',
      name: 'Content Management',
      cost: 3500,
      time: 2.5,
      category: 'Management',
      description: 'Content creation and management system'
    },

    // Security Features
    {
      id: 'backup',
      name: 'Data Backup',
      cost: 2000,
      time: 1.5,
      category: 'Security',
      description: 'Automated backup and recovery system'
    },
    {
      id: 'security',
      name: 'Advanced Security',
      cost: 3500,
      time: 2.5,
      category: 'Security',
      description: 'Two-factor auth, encryption, security audits'
    }
  ],

  designComplexity: [
    {
      id: 'simple',
      name: 'Simple Design',
      multiplier: 1,
      description: 'Basic UI with minimal customization and standard components'
    },
    {
      id: 'standard',
      name: 'Standard Design',
      multiplier: 1.3,
      description: 'Custom design with moderate complexity and branding'
    },
    {
      id: 'complex',
      name: 'Complex Design',
      multiplier: 1.7,
      description: 'Advanced UI/UX with animations, interactions, and custom graphics'
    }
  ],

  teamComposition: [
    {
      id: 'small',
      name: 'Small Team',
      multiplier: 1.2,
      description: '2-3 developers, 1 designer - More time needed but lower hourly cost'
    },
    {
      id: 'medium',
      name: 'Medium Team',
      multiplier: 1,
      description: '4-6 developers, 1-2 designers - Optimal balance of speed and cost'
    },
    {
      id: 'large',
      name: 'Large Team',
      multiplier: 0.8,
      description: '7+ developers, 2+ designers - Faster delivery with higher coordination'
    }
  ],

  additionalServices: [
    {
      id: 'testing',
      name: 'Quality Assurance',
      cost: 3000,
      description: 'Comprehensive testing and QA services'
    },
    {
      id: 'deployment',
      name: 'Deployment & DevOps',
      cost: 2500,
      description: 'Server setup, CI/CD, and deployment configuration'
    },
    {
      id: 'maintenance',
      name: '6 Months Maintenance',
      cost: 5000,
      description: 'Post-launch support and maintenance'
    }
  ]
};

module.exports = calculatorData;