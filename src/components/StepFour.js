import React from 'react';
import { Users, User, UserCheck } from 'lucide-react';

const StepFour = ({ teamOptions, selectedTeam, onSelectTeam }) => {
  const getIcon = (teamId) => {
    switch (teamId) {
      case 'small':
        return <User className="w-8 h-8 text-green-500" />;
      case 'medium':
        return <Users className="w-8 h-8 text-blue-500" />;
      case 'large':
        return <UserCheck className="w-8 h-8 text-purple-500" />;
      default:
        return <Users className="w-8 h-8 text-gray-500" />;
    }
  };

  const getTeamDetails = (teamId) => {
    switch (teamId) {
      case 'small':
        return {
          members: ['2-3 Developers', '1 Designer', '1 Project Manager'],
          pros: ['Lower cost per hour', 'Close collaboration', 'Flexible approach'],
          cons: ['Longer timeline', 'Limited expertise', 'Higher risk']
        };
      case 'medium':
        return {
          members: ['4-6 Developers', '1-2 Designers', '1 Project Manager', '1 QA Tester'],
          pros: ['Balanced approach', 'Good expertise', 'Reasonable timeline'],
          cons: ['Moderate cost', 'Standard process']
        };
      case 'large':
        return {
          members: ['7+ Developers', '2+ Designers', '2 Project Managers', '2+ QA Testers'],
          pros: ['Fastest delivery', 'Expert team', 'Comprehensive testing'],
          cons: ['Higher coordination', 'Premium cost', 'Complex management']
        };
      default:
        return { members: [], pros: [], cons: [] };
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Team Composition</h2>
      <p className="text-gray-600 mb-8">
        Select the team size that best fits your timeline and budget requirements
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {teamOptions.map(team => {
          const details = getTeamDetails(team.id);
          
          return (
            <div
              key={team.id}
              className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedTeam === team.id
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onSelectTeam(team.id)}
            >
              <div className="flex items-center justify-between mb-4">
                {getIcon(team.id)}
                <span className="text-2xl font-bold text-gray-700">
                  ×{team.multiplier}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {team.description}
              </p>
              
              {/* Team Members */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Team Members:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {details.members.map((member, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Pros and Cons */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <h5 className="font-semibold text-green-700 mb-1">Pros:</h5>
                  <ul className="text-green-600 space-y-1">
                    {details.pros.slice(0, 2).map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-red-700 mb-1">Cons:</h5>
                  <ul className="text-red-600 space-y-1">
                    {details.cons.slice(0, 2).map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Team Size Impact on Cost:</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span><strong>Small Team:</strong> +20% cost (longer timeline)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span><strong>Medium Team:</strong> Baseline cost (optimal)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span><strong>Large Team:</strong> -20% cost (faster delivery)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;