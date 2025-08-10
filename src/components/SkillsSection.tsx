import React from 'react';
import { SKILLS_DATA, SkillCategory } from '../constants/skills';
import { COLORS, COMMON_STYLES, TYPOGRAPHY, SPACING, SHADOWS } from '../constants';

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
  subtitle = "Technologies and tools I work with to bring ideas to life",
  showTitle = true,
  className = "",
  backgroundColor = COLORS.backgroundLight
}) => {
  const skillCardStyle: React.CSSProperties = {
    ...COMMON_STYLES.card,
    background: COLORS.gradientCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: '20px',
    padding: SPACING.xl,
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  };

  const skillItemStyle: React.CSSProperties = {
    backgroundColor: 'rgba(244, 143, 177, 0.05)',
    border: `1px solid ${COLORS.border}`,
    borderRadius: '12px',
    padding: '16px',
    margin: '8px 0',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  };

  const handleSkillCardHover = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.transform = 'translateY(-12px) scale(1.02)';
    element.style.boxShadow = '0 25px 50px -12px rgba(244, 143, 177, 0.25)';
    element.style.borderColor = '#f48fb1';
    
    // Do not change glow effect - keep background unchanged
  };

  const handleSkillCardLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.transform = 'translateY(0) scale(1)';
    element.style.boxShadow = SHADOWS.md;
    element.style.borderColor = COLORS.border;
    
    // Do not change glow effect - keep background unchanged
  };

  const handleSkillItemHover = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.borderColor = '#f48fb1';
    element.style.transform = 'translateX(8px) scale(1.02)';
    element.style.boxShadow = '0 8px 25px rgba(244, 143, 177, 0.2)';
  };

  const handleSkillItemLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    element.style.borderColor = COLORS.border;
    element.style.transform = 'translateX(0) scale(1)';
    element.style.boxShadow = 'none';
  };

  return (
    <section 
      className={`py-5 ${className}`}
      style={{ 
        background: backgroundColor,
        position: 'relative',
        ...COMMON_STYLES.backgroundPattern 
      }}
    >
      {/* Background decoration */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: COLORS.gradientPrimary,
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          background: COLORS.gradientSecondary,
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {showTitle && (
          <div className="text-center mb-5 fade-in-up">
            <h2 
              className="display-4 fw-bold text-gradient mb-4"
              style={{ 
                ...COMMON_STYLES.sectionTitle,
                background: COLORS.gradientPrimary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p 
                className="lead"
                style={{ 
                  ...COMMON_STYLES.sectionSubtitle,
                  color: COLORS.textSecondary,
                  fontSize: TYPOGRAPHY.sizes.xl,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {SKILLS_DATA.map((category: SkillCategory, categoryIndex: number) => (
          <div 
            key={categoryIndex} 
            className="mb-5 fade-in-up" 
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div 
              className="card card-hover"
              style={skillCardStyle}
              onMouseEnter={handleSkillCardHover}
              onMouseLeave={handleSkillCardLeave}
            >
              <div className="card-body" style={{ position: 'relative', zIndex: 1 }}>
                <div className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      width: '6px',
                      height: '40px',
                      background: COLORS.gradientPrimary,
                      borderRadius: '3px',
                      marginRight: SPACING.md,
                    }}
                  />
                  <h3 
                    className="card-title mb-0"
                    style={{ 
                      color: COLORS.textPrimary,
                      fontWeight: TYPOGRAPHY.fontWeights.bold,
                      fontSize: TYPOGRAPHY.sizes['2xl'],
                      fontFamily: TYPOGRAPHY.fontFamily,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>
                
                <div className="row g-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="col-md-6 col-lg-4">
                      <div 
                        className="skill-item"
                        style={skillItemStyle}
                        onMouseEnter={handleSkillItemHover}
                        onMouseLeave={handleSkillItemLeave}
                      >
                        <div className="d-flex align-items-center mb-2">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              background: COLORS.gradientPrimary,
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '12px',
                              flexShrink: 0,
                            }}
                          >
                            <i 
                              className={`${skill.icon}`}
                              style={{ 
                                fontSize: '18px', 
                                color: COLORS.textWhite,
                              }}
                            />
                          </div>
                          <h5 
                            className="mb-0 fw-bold"
                            style={{ 
                              color: COLORS.textPrimary,
                              fontSize: TYPOGRAPHY.sizes.lg,
                              fontWeight: TYPOGRAPHY.fontWeights.semibold,
                              fontFamily: TYPOGRAPHY.fontFamily,
                            }}
                          >
                            {skill.name}
                          </h5>
                        </div>
                        <p 
                          className="mb-0"
                          style={{ 
                            color: COLORS.textSecondary,
                            fontSize: TYPOGRAPHY.sizes.sm,
                            lineHeight: '1.5',
                            fontFamily: TYPOGRAPHY.fontFamily,
                          }}
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
