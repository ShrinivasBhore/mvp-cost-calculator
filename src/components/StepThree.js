import React from 'react';
import { Palette, Sparkles, Zap } from 'lucide-react';

const StepThree = ({ designOptions, selectedDesign, onSelectDesign }) => {
  const getIcon = (designId) => {
    switch (designId) {
      case 'simple':
        return <Palette className="w-8 h-8 text-blue-500" />;
      case 'standard':
        return <Sparkles className="w-8 h-8 text-purple-500" />;
      case 'complex':
        return <Zap className="w-8 h-8 text-orange-500" />;
      default:
        return <Palette className="w-8 h-8 text-gray-500" />;
    }
  };

  const getGradient = (designId) => {
    switch (designId) {
      case 'simple':
        return 'from-blue-400 to-blue-600';
      case 'standard':
        return 'from-purple-400 to-purple-600';
      case 'complex':
        return 'from-orange-400 to-red-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Design Complexity</h2>
      <p className="text-gray-600 mb-8">
        Choose the level of design complexity that matches your vision
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {designOptions.map(design => (
          <div
            key={design.id}
            className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden ${
              selectedDesign === design.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelectDesign(design.id)}
          >
            {/* Background Pattern */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getGradient(design.id)} opacity-10 rounded-bl-full`}></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                {getIcon(design.id)}
                <span className="text-2xl font-bold text-gray-700">
                  ×{design.multiplier}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{design.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {design.description}
              </p>
              
              {/* Features list based on complexity */}
              <div className="space-y-2">
                {design.id === 'simple' && (
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Standard UI components</li>
                    <li>• Basic color scheme</li>
                    <li>• Minimal customization</li>
                  </ul>
                )}
                
                {design.id === 'standard' && (
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Custom UI components</li>
                    <li>• Brand-specific design</li>
                    <li>• Moderate animations</li>
                    <li>• Responsive layouts</li>
                  </ul>
                )}
                
                {design.id === 'complex' && (
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Advanced UI/UX design</li>
                    <li>• Complex animations</li>
                    <li>• Interactive elements</li>
                    <li>• Custom graphics</li>
                    <li>• Premium user experience</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-1">Simple Design</h4>
          <p className="text-blue-600">
            Perfect for MVPs focused on functionality over aesthetics
          </p>
        </div>
        
        <div className="p-3 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-1">Standard Design</h4>
          <p className="text-purple-600">
            Great balance between cost and professional appearance
          </p>
        </div>
        
        <div className="p-3 bg-orange-50 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-1">Complex Design</h4>
          <p className="text-orange-600">
            Premium design for apps requiring exceptional user experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepThree;