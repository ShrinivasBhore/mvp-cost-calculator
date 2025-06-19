 import React from 'react';
import { DollarSign, Clock, CheckCircle, Download, RefreshCw, Users, Smartphone, Monitor, Palette } from 'lucide-react';

const Results = ({ estimate, onReset }) => {
  const { estimate: estimateData, selections } = estimate;

  const handleDownloadEstimate = () => {
    const estimateText = generateEstimateText();
    const blob = new Blob([estimateText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mvp-cost-estimate.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateEstimateText = () => {
    return `MVP COST ESTIMATE

Project Summary:
- Platform: ${selections.platform.name}
- Total Cost: $${estimateData.totalCost.toLocaleString()}
- Development Time: ${estimateData.developmentTime} weeks
- Team Size: ${selections.team.name}
- Design Complexity: ${selections.design.name}

Selected Features:
${selections.features.map(feature => `- ${feature.name}: $${feature.cost.toLocaleString()}`).join('\n')}

Cost Breakdown:
- Base Platform Cost: $${estimateData.baseCost.toLocaleString()}
- Features Cost: $${estimateData.featuresCost.toLocaleString()}
- Design Multiplier: ${selections.design.multiplier}x
- Team Multiplier: ${selections.team.multiplier}x

Generated on: ${new Date().toLocaleDateString()}
`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getPlatformIcon = (platformId) => {
    switch (platformId) {
      case 'web':
        return <Monitor className="w-6 h-6" />;
      case 'mobile':
        return <Smartphone className="w-6 h-6" />;
      case 'both':
        return (
          <div className="flex">
            <Monitor className="w-5 h-5 mr-1" />
            <Smartphone className="w-5 h-5" />
          </div>
        );
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <div className="results-card">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your MVP Estimate is Ready!
        </h2>
        <p className="text-lg text-gray-600">
          Here's a detailed breakdown of your development costs and timeline
        </p>
      </div>

      {/* Main Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Total Cost */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center border-2 border-blue-100">
          <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Cost</h3>
          <p className="text-3xl font-bold gradient-text">
            {formatCurrency(estimateData.totalCost)}
          </p>
        </div>

        {/* Development Time */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 text-center border-2 border-green-100">
          <Clock className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Timeline</h3>
          <p className="text-3xl font-bold text-green-600">
            {estimateData.developmentTime}
          </p>
          <p className="text-sm text-gray-500">weeks</p>
        </div>

        {/* Features Count */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 text-center border-2 border-orange-100">
          <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Features</h3>
          <p className="text-3xl font-bold text-orange-600">
            {selections.features.length}
          </p>
          <p className="text-sm text-gray-500">selected</p>
        </div>
      </div>

      {/* Project Configuration */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Project Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Platform */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              {getPlatformIcon(selections.platform.id)}
            </div>
            <div>
              <p className="text-sm text-gray-500">Platform</p>
              <p className="font-semibold text-gray-800">{selections.platform.name}</p>
            </div>
          </div>

          {/* Design */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Design</p>
              <p className="font-semibold text-gray-800">{selections.design.name}</p>
            </div>
          </div>

          {/* Team */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Team Size</p>
              <p className="font-semibold text-gray-800">{selections.team.name}</p>
            </div>
          </div>

          {/* Base Cost */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Base Cost</p>
              <p className="font-semibold text-gray-800">{formatCurrency(estimateData.baseCost)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Cost Breakdown</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Base Platform Cost ({selections.platform.name})</span>
            <span className="font-semibold">{formatCurrency(estimateData.baseCost)}</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Features Cost</span>
            <span className="font-semibold">{formatCurrency(estimateData.featuresCost)}</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Design Multiplier ({selections.design.multiplier}x)</span>
            <span className="font-semibold">Applied</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Team Multiplier ({selections.team.multiplier}x)</span>
            <span className="font-semibold">Applied</span>
          </div>
          
          <hr className="my-4" />
          
          <div className="flex justify-between items-center py-2 text-lg font-bold">
            <span className="text-gray-800">Total Estimated Cost</span>
            <span className="gradient-text">{formatCurrency(estimateData.totalCost)}</span>
          </div>
        </div>
      </div>

      {/* Selected Features */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Selected Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selections.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">{feature.name}</p>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{formatCurrency(feature.cost)}</p>
                <p className="text-sm text-gray-500">{feature.duration} weeks</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleDownloadEstimate}
          className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:transform hover:translateY(-1px)"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Estimate
        </button>
        
        <button
          onClick={onReset}
          className="flex items-center justify-center px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 hover:transform hover:translateY(-1px)"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Start New Estimate
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This estimate is based on average development costs and may vary 
          depending on specific requirements, complexity, and market conditions. For a more accurate 
          quote, please consult with our development team.
        </p>
      </div>
    </div>
  );
};

export default Results;