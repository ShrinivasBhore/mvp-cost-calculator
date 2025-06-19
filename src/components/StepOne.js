import React from 'react';
import { Monitor, Smartphone, RefreshCw } from 'lucide-react';

const StepOne = ({ platforms, selectedPlatform, onSelectPlatform }) => {
  const getIcon = (platformId) => {
    switch (platformId) {
      case 'web':
        return <Monitor className="w-8 h-8 text-blue-500" />;
      case 'mobile':
        return <Smartphone className="w-8 h-8 text-green-500" />;
      case 'both':
        return <RefreshCw className="w-8 h-8 text-purple-500" />;
      default:
        return <Monitor className="w-8 h-8 text-gray-500" />;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Platform</h2>
      <p className="text-gray-600 mb-8">Select the platform for your MVP application</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map(platform => (
          <div
            key={platform.id}
            className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPlatform === platform.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelectPlatform(platform.id)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {getIcon(platform.id)}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
              
              <div className="space-y-1">
                <div className="text-xl font-bold text-gray-800">
                  ${platform.baseCost.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  {platform.baseTime} weeks
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          💡 <strong>Tip:</strong> Web + Mobile option provides the best value for comprehensive reach across all devices.
        </p>
      </div>
    </div>
  );
};

export default StepOne;