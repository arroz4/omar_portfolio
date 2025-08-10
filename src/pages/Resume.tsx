import React from 'react';
import SkillsSection from '../components/SkillsSection';
import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '../constants';

const Resume: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/files/OmarBarrera_CV2025.pdf`;
        link.download = 'OmarBarrera_CV2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const experiences = [
        {
            title: "Software Engineer",
            company: "Microsoft",
            location: "Mexico City, Mexico",
            period: "May 2022 - Present",
            description: "Leading data engineering initiatives in the Finance Insights department, developing tools for reporting and information delivery environments. Working with big data sources performing transformations that brought actionable insights to up to 30k users from the finance department.",
            achievements: [
                "Built data warehousing solutions processing 10M+ records daily",
                "Implemented custom data models for specific business purposes",
                "Developed ETL pipelines with 99.9% uptime reliability",
                "Created orchestration systems for automated data processing",
                "Delivered business logic implementations with high impact"
            ],
            technologies: ["Azure", "Python", "SQL", "Power BI", "Azure Synapse", "Azure Data Factory"]
        },
        {
            title: "Data Engineer",
            company: "Wyde Corporation / Hewlett Packard",
            location: "Guadalajara, Mexico",
            period: "March 2021 - April 2022",
            description: "Developed ETL pipelines for sales teams with high availability. Involved in system automation and database maintenance. Built dashboards and visual integration systems for financial analysis of sales teams.",
            achievements: [
                "Designed high-availability ETL pipelines for sales operations",
                "Implemented automated systems reducing manual processes by 80%",
                "Created financial analysis dashboards for sales teams",
                "Maintained database systems with 99.8% uptime",
                "Built visual integration systems for data analysis"
            ],
            technologies: ["Python", "SQL Server", "Tableau", "ETL", "Power BI"]
        },
        {
            title: "BI Analyst",
            company: "G-Global",
            location: "San Diego/Tijuana",
            period: "July 2020 - January 2021",
            description: "Managed KPI dashboard portfolio by applying different tools. Developed systems for warehouse inventory verification through a web application. Automated workflows through scripts to improve warehouse process flow in WMS.",
            achievements: [
                "Managed comprehensive KPI dashboard portfolio",
                "Developed warehouse inventory verification systems",
                "Automated workflows improving process efficiency by 60%",
                "Conducted statistical analysis for import/export optimization",
                "Built web applications for inventory management"
            ],
            technologies: ["Excel", "Power BI", "Python", "SQL", "Web Development"]
        }
    ];

    const education = [
        {
            degree: "Industrial Engineering",
            institution: "Universidad La Salle Noroeste",
            location: "Mexico",
            period: "2015 - 2019",
            description: "Graduated December 2019 with focus on process optimization, statistical analysis, and systems engineering.",
            achievements: [
                "Specialized in process optimization and efficiency",
                "Strong foundation in statistical analysis and data interpretation",
                "Developed analytical thinking and problem-solving skills",
                "Coursework in operations research and systems engineering"
            ]
        }
    ];

    const certifications = [
        "Microsoft Azure Data Engineer Associate (DP-203)",
        "Microsoft Azure Fundamentals (AZ-900)",
        "Power BI Data Analyst Associate (PL-300)",
        "Python for Data Science and Machine Learning",
        "Advanced SQL and Database Design"
    ];

    return (
        <div style={{ 
            minHeight: '100vh',
            background: COLORS.backgroundLight,
            ...COMMON_STYLES.backgroundPattern 
        }}>
            {/* Hero Section */}
            <section style={{ 
                background: COLORS.gradientPrimary,
                padding: '6rem 0 4rem 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }} />
                
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="fade-in-up">
                                <h1 style={{
                                    fontSize: TYPOGRAPHY.sizes['5xl'],
                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                    color: COLORS.textWhite,
                                    marginBottom: '1rem'
                                }}>
                                    Resume
                                </h1>
                                <p style={{
                                    fontSize: TYPOGRAPHY.sizes.xl,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    maxWidth: '600px',
                                    lineHeight: '1.6'
                                }}>
                                    Comprehensive overview of my professional experience, skills, and achievements 
                                    in data engineering and Azure technologies.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="slide-in-right" style={{ animationDelay: '0.3s' }}>
                                <button 
                                    onClick={handleDownload}
                                    style={{
                                        ...COMMON_STYLES.primaryButton,
                                        background: COLORS.gradientSecondary,
                                        border: 'none',
                                        fontSize: TYPOGRAPHY.sizes.lg,
                                        padding: '1rem 2rem',
                                        width: '100%',
                                        maxWidth: '300px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(245, 87, 108, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                    }}
                                >
                                    <i className="bi bi-download me-2" />
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Professional Experience
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Building scalable data solutions and driving business impact through innovation
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            {experiences.map((exp, index) => (
                                <div 
                                    key={index}
                                    className="mb-5 fade-in-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div 
                                        className="card card-hover"
                                        style={{
                                            ...COMMON_STYLES.card,
                                            background: COLORS.gradientCard,
                                            border: `1px solid ${COLORS.border}`
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3 style={{
                                                    fontSize: TYPOGRAPHY.sizes.xl,
                                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                                    color: COLORS.textPrimary,
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    {exp.title}
                                                </h3>
                                                <h4 style={{
                                                    fontSize: TYPOGRAPHY.sizes.lg,
                                                    fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                                    color: COLORS.primary,
                                                    marginBottom: '1rem'
                                                }}>
                                                    {exp.company} • {exp.location}
                                                </h4>
                                            </div>
                                            <div className="col-md-4 text-md-end">
                                                <span style={{
                                                    backgroundColor: COLORS.primary,
                                                    color: COLORS.textWhite,
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '25px',
                                                    fontSize: TYPOGRAPHY.sizes.sm,
                                                    fontWeight: TYPOGRAPHY.fontWeights.medium,
                                                    display: 'inline-block'
                                                }}>
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p style={{
                                            color: COLORS.textSecondary,
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.6'
                                        }}>
                                            {exp.description}
                                        </p>
                                        
                                        <div className="mb-3">
                                            <h5 style={{
                                                fontSize: TYPOGRAPHY.sizes.base,
                                                fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                                color: COLORS.textPrimary,
                                                marginBottom: '0.75rem'
                                            }}>
                                                Key Achievements:
                                            </h5>
                                            <ul style={{ 
                                                color: COLORS.textSecondary,
                                                paddingLeft: '1.2rem'
                                            }}>
                                                {exp.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} style={{ marginBottom: '0.5rem' }}>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h5 style={{
                                                fontSize: TYPOGRAPHY.sizes.base,
                                                fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                                color: COLORS.textPrimary,
                                                marginBottom: '0.75rem'
                                            }}>
                                                Technologies:
                                            </h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        style={{
                                                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                                            color: COLORS.primary,
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '15px',
                                                            fontSize: TYPOGRAPHY.sizes.sm,
                                                            fontWeight: TYPOGRAPHY.fontWeights.medium
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section style={{ padding: '5rem 0', backgroundColor: COLORS.backgroundWhite }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Education
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Academic foundation in engineering and analytical thinking
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {education.map((edu, index) => (
                                <div 
                                    key={index}
                                    className="fade-in-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div 
                                        className="card card-hover"
                                        style={{
                                            ...COMMON_STYLES.card,
                                            background: COLORS.gradientCard,
                                            border: `1px solid ${COLORS.border}`
                                        }}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h3 style={{
                                                    fontSize: TYPOGRAPHY.sizes.xl,
                                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                                    color: COLORS.textPrimary,
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    {edu.degree}
                                                </h3>
                                                <h4 style={{
                                                    fontSize: TYPOGRAPHY.sizes.lg,
                                                    fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                                    color: COLORS.primary,
                                                    marginBottom: '1rem'
                                                }}>
                                                    {edu.institution} • {edu.location}
                                                </h4>
                                            </div>
                                            <div className="col-md-4 text-md-end">
                                                <span style={{
                                                    backgroundColor: COLORS.secondary,
                                                    color: COLORS.textWhite,
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '25px',
                                                    fontSize: TYPOGRAPHY.sizes.sm,
                                                    fontWeight: TYPOGRAPHY.fontWeights.medium,
                                                    display: 'inline-block'
                                                }}>
                                                    {edu.period}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p style={{
                                            color: COLORS.textSecondary,
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.6'
                                        }}>
                                            {edu.description}
                                        </p>
                                        
                                        <div>
                                            <h5 style={{
                                                fontSize: TYPOGRAPHY.sizes.base,
                                                fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                                color: COLORS.textPrimary,
                                                marginBottom: '0.75rem'
                                            }}>
                                                Key Areas:
                                            </h5>
                                            <ul style={{ 
                                                color: COLORS.textSecondary,
                                                paddingLeft: '1.2rem'
                                            }}>
                                                {edu.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} style={{ marginBottom: '0.5rem' }}>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Certifications & Training
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Continuous learning and professional development
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div 
                                className="card fade-in-up"
                                style={{
                                    ...COMMON_STYLES.card,
                                    background: COLORS.gradientCard,
                                    border: `1px solid ${COLORS.border}`
                                }}
                            >
                                <div className="row g-3">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="d-flex align-items-center">
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    background: COLORS.gradientSecondary,
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '1rem',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-award" style={{
                                                        fontSize: '1.2rem',
                                                        color: COLORS.textWhite
                                                    }} />
                                                </div>
                                                <span style={{
                                                    color: COLORS.textPrimary,
                                                    fontWeight: TYPOGRAPHY.fontWeights.medium
                                                }}>
                                                    {cert}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <SkillsSection 
                title="Technical Skills & Expertise"
                subtitle="Comprehensive toolkit for modern data engineering and analytics"
                showTitle={true}
                backgroundColor={COLORS.backgroundWhite}
            />

            {/* Download CTA */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div 
                                className="card text-center"
                                style={{
                                    ...COMMON_STYLES.card,
                                    background: COLORS.gradientPrimary,
                                    color: COLORS.textWhite,
                                    border: 'none'
                                }}
                            >
                                <h3 style={{
                                    fontSize: TYPOGRAPHY.sizes['2xl'],
                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                    marginBottom: '1rem'
                                }}>
                                    Ready to Work Together?
                                </h3>
                                <p style={{
                                    fontSize: TYPOGRAPHY.sizes.lg,
                                    marginBottom: '2rem',
                                    opacity: 0.9
                                }}>
                                    Download my complete CV or get in touch to discuss how I can contribute 
                                    to your team's success.
                                </p>
                                
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <button 
                                        onClick={handleDownload}
                                        style={{
                                            backgroundColor: COLORS.textWhite,
                                            color: COLORS.primary,
                                            border: `2px solid ${COLORS.textWhite}`,
                                            padding: '1rem 2rem',
                                            borderRadius: '50px',
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                            fontFamily: TYPOGRAPHY.fontFamily,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = COLORS.textWhite;
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = COLORS.textWhite;
                                            e.currentTarget.style.color = COLORS.primary;
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                                        }}
                                    >
                                        <i className="bi bi-download me-2" />
                                        Download Full CV
                                    </button>
                                    <a 
                                        href="mailto:omarb22@gmail.com"
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: COLORS.textWhite,
                                            border: `2px solid ${COLORS.textWhite}`,
                                            padding: '1rem 2rem',
                                            borderRadius: '50px',
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            fontFamily: TYPOGRAPHY.fontFamily,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = COLORS.textWhite;
                                            e.currentTarget.style.color = COLORS.primary;
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = COLORS.textWhite;
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <i className="bi bi-envelope me-2" />
                                        Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
