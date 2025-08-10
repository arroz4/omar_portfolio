import React from 'react';
import { SKILLS_DATA, SkillCategory } from '../constants/skills';
import { COLORS } from '../constants/colors';

interface SkillsSectionProps {
  /** Title for the skills section */
  title?: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Whether to show the section title */
  showTitle?: boolean;
  /** Additional CSS classes for customization */
  className?: string;
  /** Custom background color */
  backgroundColor?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Technical Skills",
  subtitle = "Technologies and tools I work with",
  showTitle = true,
  className = "",
  backgroundColor = COLORS.backgroundLight
}) => {
  const skillCardStyle: React.CSSProperties = {
    backgroundColor: COLORS.backgroundWhite,
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    height: '100%',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const skillItemStyle: React.CSSProperties = {
    backgroundColor: COLORS.backgroundCard,
    border: '1px solid #d0e7ff',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const handleSkillCardHover = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.transform = 'translateY(-5px)';
    element.style.boxShadow = `0 8px 25px rgba(74, 144, 226, 0.15)`;
    element.style.borderColor = COLORS.primary;
  };

  const handleSkillCardLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.transform = 'translateY(0)';
    element.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    element.style.borderColor = '#e0e0e0';
  };

  const handleSkillItemHover = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.backgroundColor = COLORS.backgroundWhite;
    element.style.borderColor = COLORS.primary;
    element.style.transform = 'scale(1.02)';
    element.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.2)';
  };

  const handleSkillItemLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.backgroundColor = COLORS.backgroundCard;
    element.style.borderColor = '#d0e7ff';
    element.style.transform = 'scale(1)';
    element.style.boxShadow = 'none';
  };

  return (
    <section 
      className={`py-5 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="container">
        {showTitle && (
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold" style={{ color: COLORS.textPrimary }}>
              {title}
            </h2>
            {subtitle && (
              <p className="lead" style={{ color: COLORS.textSecondary }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {SKILLS_DATA.map((category: SkillCategory, categoryIndex: number) => (
          <div key={categoryIndex} className="mb-5">
            <div 
              className="card"
              style={skillCardStyle}
              onMouseEnter={handleSkillCardHover}
              onMouseLeave={handleSkillCardLeave}
            >
              <div className="card-body">
                <h3 
                  className="card-title mb-4 text-center"
                  style={{ color: COLORS.primary, fontWeight: 'bold' }}
                >
                  {category.title}
                </h3>
                <div className="row">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="col-md-6 col-lg-4">
                      <div 
                        className="skill-item"
                        style={skillItemStyle}
                        onMouseEnter={handleSkillItemHover}
                        onMouseLeave={handleSkillItemLeave}
                      >
                        <div className="d-flex align-items-center mb-2">
                          <i 
                            className={`${skill.icon} me-3`}
                            style={{ 
                              fontSize: '1.5rem', 
                              color: COLORS.primary,
                              minWidth: '24px'
                            }}
                          ></i>
                          <h5 
                            className="mb-0 fw-bold"
                            style={{ color: COLORS.textPrimary }}
                          >
                            {skill.name}
                          </h5>
                        </div>
                        <p 
                          className="mb-0 small"
                          style={{ color: COLORS.textSecondary }}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
