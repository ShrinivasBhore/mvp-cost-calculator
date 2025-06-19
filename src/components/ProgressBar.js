import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-700">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span className={currentStep >= 1 ? 'text-blue-600 font-medium' : ''}>Platform</span>
        <span className={currentStep >= 2 ? 'text-blue-600 font-medium' : ''}>Features</span>
        <span className={currentStep >= 3 ? 'text-blue-600 font-medium' : ''}>Design</span>
        <span className={currentStep >= 4 ? 'text-blue-600 font-medium' : ''}>Team</span>
      </div>
    </div>
  );
};

export default ProgressBar;