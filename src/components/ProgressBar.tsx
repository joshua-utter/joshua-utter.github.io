import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, label }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-custom-matteblue rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${percentage}%`,
            animation: 'growWidth 1.5s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;