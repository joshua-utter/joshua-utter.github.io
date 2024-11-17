import { type FC } from 'react';

interface Skill {
  name: string;
  level: number;
}

const SkillChart: FC<{ skills: Skill[] }> = ({ skills }) => {
  const maxRadius = 150;
  const centerX = 225;
  const centerY = 225;
  const textOffset = 25;

  return (
    <svg width="480" height="450"  className="transform transition-transform duration-500 hover:scale-105">
      {/* Background circles for reference */}
      {[25, 50, 75, 100].map((percentage) => (
        <circle
          key={percentage}
          cx={centerX}
          cy={centerY}
          r={(percentage / 100) * maxRadius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {skills.map((skill, index) => {
        const angle = (2 * Math.PI * index) / skills.length - Math.PI / 2; // Start from top
        const radius = (skill.level / 100) * maxRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // Calculate text position with offset
        const textRadius = radius + textOffset;
        const textX = centerX + textRadius * Math.cos(angle);
        const textY = centerY + textRadius * Math.sin(angle);

        // Determine text anchor based on position
        const textAnchor = textX > centerX ? "start" : textX < centerX ? "end" : "middle";
        const textBaseline = textY > centerY ? "hanging" : textY < centerY ? "baseline" : "middle";

        return (
          <g key={skill.name}>
            {/* Skill line */}
            <line
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Skill point */}
            <circle
              cx={x}
              cy={y}
              r="6"
              className="fill-custom-matteblue"
              style={{
                animation: `fadeIn 1s ease-out ${index * 0.2}s forwards`,
                opacity: 0
              }}
            />
            {/* Skill label */}
            <text
              x={textX}
              y={textY}
              textAnchor={textAnchor}
              dominantBaseline={textBaseline}
              className="text-sm fill-gray-600 font-medium"
            >
              {`${skill.name} (${skill.level}%)`}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default SkillChart;