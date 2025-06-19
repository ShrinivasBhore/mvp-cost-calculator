import React from 'react';
import { CheckCircle, Circle, Plus } from 'lucide-react';

const StepTwo = ({ 
  features, 
  selectedFeatures, 
  onToggleFeature,
  additionalServices,
  selectedServices,
  onToggleService 
}) => {
  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {});

  const getTotalSelectedCost = () => {
    let total = 0;
    
    // Add feature costs
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) total += feature.cost;
    });
    
    // Add service costs
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.cost;
    });
    
    return total;
  };

  const getTotalSelectedTime = () => {
    let total = 0;
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) total += feature.time;
    });
    return total;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Select Features</h2>
          <p className="text-gray-600">Choose the features you need for your MVP</p>
        </div>
        
        {(selectedFeatures.length > 0 || selectedServices.length > 0) && (
          <div className="text-right">
            <div className="text-sm text-gray-500">Selected Features Cost</div>
            <div className="text-lg font-bold text-blue-600">
              ${getTotalSelectedCost().toLocaleString()}
            </div>
            {getTotalSelectedTime() > 0 && (
              <div className="text-sm text-gray-500">
                +{getTotalSelectedTime()} weeks
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Features by Category */}
        {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {category} Features
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {categoryFeatures.map(feature => (
                <div
                  key={feature.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                  onClick={() => onToggleFeature(feature.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      {selectedFeatures.includes(feature.id) ? (
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 mr-2" />
                      )}
                      <h4 className="font-medium text-gray-800">{feature.name}</h4>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">
                      ${feature.cost.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2 ml-7">
                    {feature.description}
                  </p>
                  
                  <div className="text-xs text-gray-500 ml-7">
                    Development time: {feature.time} weeks
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Services */}
        {additionalServices && additionalServices.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <Plus className="w-5 h-5 text-green-500 mr-2" />
              Additional Services
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {additionalServices.map(service => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedServices.includes(service.id)
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                  onClick={() => onToggleService(service.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      {selectedServices.includes(service.id) ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 mr-2" />
                      )}
                      <h4 className="font-medium text-gray-800">{service.name}</h4>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      ${service.cost.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 ml-7">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-700">
          💡 <strong>Tip:</strong> Select only the features essential for your MVP. You can always add more features in future iterations.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;