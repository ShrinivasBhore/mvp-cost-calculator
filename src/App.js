 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';
import './styles/App.css';

const API_BASE_URL = 'http://localhost:3001/api';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    platforms: [],
    features: [],
    designOptions: [],
    teamOptions: []
  });

  // User selections
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [estimate, setEstimate] = useState(null);

  // Fetch calculator data on component mount
  useEffect(() => {
    fetchCalculatorData();
  }, []);

  const fetchCalculatorData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/calculator/options`);
      setCalculatorData(response.data);
    } catch (error) {
      console.error('Error fetching calculator data:', error);
      toast.error('Failed to load calculator data. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep === 4) {
        calculateEstimate();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        if (!selectedPlatform) {
          toast.error('Please select a platform to continue.');
          return false;
        }
        return true;
      case 2:
        if (selectedFeatures.length === 0) {
          toast.error('Please select at least one feature to continue.');
          return false;
        }
        return true;
      case 3:
        if (!selectedDesign) {
          toast.error('Please select a design complexity to continue.');
          return false;
        }
        return true;
      case 4:
        if (!selectedTeam) {
          toast.error('Please select a team composition to continue.');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const calculateEstimate = async () => {
    try {
      setLoading(true);
      const requestData = {
        platform: selectedPlatform,
        features: selectedFeatures,
        design: selectedDesign,
        team: selectedTeam
      };

      const response = await axios.post(`${API_BASE_URL}/calculator/estimate`, requestData);
      setEstimate(response.data);
      setCurrentStep(5);
      toast.success('Estimate calculated successfully!');
    } catch (error) {
      console.error('Error calculating estimate:', error);
      toast.error('Failed to calculate estimate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedPlatform(null);
    setSelectedFeatures([]);
    setSelectedDesign(null);
    setSelectedTeam(null);
    setEstimate(null);
    toast.info('Calculator reset successfully!');
  };

  const renderCurrentStep = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="loading-spinner w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <StepOne
            platforms={calculatorData.platforms}
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
          />
        );
      case 2:
        return (
          <StepTwo
            features={calculatorData.features}
            selectedFeatures={selectedFeatures}
            onSelectFeatures={setSelectedFeatures}
          />
        );
      case 3:
        return (
          <StepThree
            designOptions={calculatorData.designOptions}
            selectedDesign={selectedDesign}
            onSelectDesign={setSelectedDesign}
          />
        );
      case 4:
        return (
          <StepFour
            teamOptions={calculatorData.teamOptions}
            selectedTeam={selectedTeam}
            onSelectTeam={setSelectedTeam}
          />
        );
      case 5:
        return (
          <Results
            estimate={estimate}
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            MVP Cost Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an accurate estimate for your MVP development project. 
            Select your platform, features, and team preferences to calculate costs.
          </p>
        </div>

        {/* Progress Bar */}
        {currentStep <= 4 && (
          <div className="max-w-4xl mx-auto mb-8">
            <ProgressBar currentStep={currentStep} totalSteps={4} />
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Step Content */}
              <div className="fade-in">
                {renderCurrentStep()}
              </div>

              {/* Navigation Buttons */}
              {currentStep <= 4 && (
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:transform hover:translateY(-1px)'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">
                      Step {currentStep} of 4
                    </p>
                    <div className="flex space-x-2">
                      {Array.from({ length: 4 }, (_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index + 1 <= currentStep
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-primary text-white ${
                      loading ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:translateY(-1px)'
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="loading-spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Processing...
                      </div>
                    ) : currentStep === 4 ? (
                      'Calculate Estimate'
                    ) : (
                      'Next Step'
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Built with React & Node.js • Accurate MVP Cost Estimation
          </p>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;