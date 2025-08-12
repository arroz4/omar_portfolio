import React from 'react';
import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '../constants';

const AboutMe: React.FC = () => {
    // Template data - replace with your actual information
    const personalInfo = {
        name: "Omar Barrera",
        title: "Senior Data Engineer & Azure Specialist",
        location: "Mexico City, Mexico",
        email: "omarb22@gmail.com",
        phone: "+52 (XXX) XXX-XXXX", // Replace with your actual phone
        experience: "5+ years",
        profileImage: `${process.env.PUBLIC_URL}/images/omar/omar_best.jpg`
    };

    const aboutSections = [
        {
            title: "Who I Am",
            content: [
                "Passionate data engineer with 5+ years of experience transforming complex data challenges into scalable solutions",
                "Currently working at Microsoft in Mexico City, specializing in Azure cloud technologies",
                "Proven track record of building systems that process millions of records daily with 99.9% uptime"
            ],
            icon: "bi-person-circle"
        },
        {
            title: "What I Do",
            content: [
                "Architect and implement end-to-end data pipelines and robust ETL processes",
                "Create insightful analytics solutions spanning data warehousing to machine learning deployment",
                "Leverage Azure's ecosystem to build scalable, cost-effective data solutions"
            ],
            icon: "bi-gear-wide-connected"
        },
        {
            title: "My Approach",
            content: [
                "Build data solutions that are technically sound, business-driven, and user-focused",
                "Design every pipeline considering scalability, maintainability, and performance",
                "Committed to continuous learning and staying current with emerging technologies"
            ],
            icon: "bi-lightbulb"
        }
    ];

    const achievements = [
        {
            metric: "10M+",
            description: "Records processed daily",
            icon: "bi-database"
        },
        {
            metric: "99.9%",
            description: "System uptime achieved",
            icon: "bi-shield-check"
        },
        {
            metric: "30k+",
            description: "Users supported",
            icon: "bi-people"
        },
        {
            metric: "50+",
            description: "Projects delivered",
            icon: "bi-trophy"
        }
    ];

    const interests = [
        {
            title: "Technology Innovation",
            description: "Exploring emerging technologies in AI, cloud computing, and data engineering",
            icon: "bi-cpu"
        },
        {
            title: "Open Source",
            description: "Contributing to open-source projects and sharing knowledge with the community",
            icon: "bi-github"
        },
        {
            title: "Continuous Learning",
            description: "Pursuing certifications and staying updated with industry best practices",
            icon: "bi-book"
        },
        {
            title: "Mentoring",
            description: "Helping junior developers and data professionals grow in their careers",
            icon: "bi-person-plus"
        }
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
                    <div className="row align-items-center g-4">
                        <div className="col-lg-7">
                            <div className="fade-in-up" style={{ textAlign: 'right', paddingRight: '4rem' }}>
                                <h1 style={{
                                    fontSize: TYPOGRAPHY.sizes['5xl'],
                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                    color: COLORS.textWhite,
                                    marginBottom: '1rem'
                                }}>
                                    About Me
                                </h1>
                                <p style={{
                                    fontSize: TYPOGRAPHY.sizes.xl,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    maxWidth: '500px',
                                    lineHeight: '1.6',
                                    marginLeft: 'auto'
                                }}>
                                    Passionate about transforming data into actionable insights and building 
                                    scalable solutions that drive business success.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="fade-in-up" style={{ animationDelay: '0.3s', paddingLeft: '2rem', opacity: 0, animationFillMode: 'forwards' }}>
                                <div style={{
                                    width: '280px',
                                    height: '280px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `6px solid ${COLORS.backgroundWhite}`,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    margin: '0 0 0 0'
                                }}>
                                    <img 
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Info */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div 
                                className="card fade-in-up"
                                style={{
                                    ...COMMON_STYLES.card,
                                    background: COLORS.gradientCard,
                                    textAlign: 'center'
                                }}
                            >
                                <h2 style={{
                                    fontSize: TYPOGRAPHY.sizes['3xl'],
                                    fontWeight: TYPOGRAPHY.fontWeights.bold,
                                    color: COLORS.textPrimary,
                                    marginBottom: '1rem'
                                }}>
                                    {personalInfo.name}
                                </h2>
                                <h3 style={{
                                    fontSize: TYPOGRAPHY.sizes.xl,
                                    fontWeight: TYPOGRAPHY.fontWeights.medium,
                                    color: COLORS.primary,
                                    marginBottom: '2rem'
                                }}>
                                    {personalInfo.title}
                                </h3>
                                
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="bi bi-geo-alt me-2" style={{ color: COLORS.primary }} />
                                            <span>{personalInfo.location}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="bi bi-briefcase me-2" style={{ color: COLORS.primary }} />
                                            <span>{personalInfo.experience} Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Sections */}
            <section style={{ padding: '5rem 0', backgroundColor: COLORS.backgroundWhite }}>
                <div className="container">
                    <div className="row g-4">
                        {aboutSections.map((section, index) => (
                            <div key={index} className="col-lg-4">
                                <div 
                                    className="card card-hover fade-in-up"
                                    style={{
                                        ...COMMON_STYLES.card,
                                        height: '100%',
                                        textAlign: 'center',
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                >
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        background: COLORS.gradientPrimary,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 2rem auto'
                                    }}>
                                        <i className={section.icon} style={{
                                            fontSize: '2rem',
                                            color: COLORS.textWhite
                                        }} />
                                    </div>
                                    
                                    <h3 style={{
                                        fontSize: TYPOGRAPHY.sizes.xl,
                                        fontWeight: TYPOGRAPHY.fontWeights.bold,
                                        color: COLORS.textPrimary,
                                        marginBottom: '1rem'
                                    }}>
                                        {section.title}
                                    </h3>
                                    
                                    <ul style={{
                                        color: COLORS.textSecondary,
                                        lineHeight: '1.7',
                                        textAlign: 'left',
                                        paddingLeft: '1.5rem',
                                        margin: 0,
                                        listStyleType: 'none'
                                    }}>
                                        {section.content.map((point, idx) => (
                                            <li key={idx} style={{
                                                marginBottom: '0.75rem',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '-1.5rem',
                                                    top: '0.1rem',
                                                    color: COLORS.primary,
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem'
                                                }}>
                                                    •
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Key Achievements
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Measurable impact through innovative data solutions
                        </p>
                    </div>

                    <div className="row g-4">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div 
                                    className="card card-hover fade-in-up"
                                    style={{
                                        ...COMMON_STYLES.card,
                                        textAlign: 'center',
                                        background: COLORS.gradientCard,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: COLORS.gradientSecondary,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1rem auto'
                                    }}>
                                        <i className={achievement.icon} style={{
                                            fontSize: '1.5rem',
                                            color: COLORS.textWhite
                                        }} />
                                    </div>
                                    
                                    <h3 style={{
                                        fontSize: TYPOGRAPHY.sizes['2xl'],
                                        fontWeight: TYPOGRAPHY.fontWeights.bold,
                                        color: COLORS.primary,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {achievement.metric}
                                    </h3>
                                    
                                    <p style={{
                                        color: COLORS.textSecondary,
                                        fontSize: TYPOGRAPHY.sizes.sm,
                                        margin: 0
                                    }}>
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interests & Hobbies */}
            <section style={{ padding: '5rem 0', backgroundColor: COLORS.backgroundWhite }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Beyond Work
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            What drives me outside of professional work
                        </p>
                    </div>

                    <div className="row g-4">
                        {interests.map((interest, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div 
                                    className="card card-hover fade-in-up"
                                    style={{
                                        ...COMMON_STYLES.card,
                                        height: '100%',
                                        textAlign: 'center',
                                        background: COLORS.gradientCard,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: COLORS.gradientSecondary,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1rem auto'
                                    }}>
                                        <i className={interest.icon} style={{
                                            fontSize: '1.2rem',
                                            color: COLORS.textWhite
                                        }} />
                                    </div>
                                    
                                    <h4 style={{
                                        fontSize: TYPOGRAPHY.sizes.lg,
                                        fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                        color: COLORS.textPrimary,
                                        marginBottom: '0.75rem'
                                    }}>
                                        {interest.title}
                                    </h4>
                                    
                                    <p style={{
                                        color: COLORS.textSecondary,
                                        fontSize: TYPOGRAPHY.sizes.sm,
                                        lineHeight: '1.5',
                                        margin: 0
                                    }}>
                                        {interest.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
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
                                    Let's Build Something Amazing Together
                                </h3>
                                <p style={{
                                    fontSize: TYPOGRAPHY.sizes.lg,
                                    marginBottom: '2rem',
                                    opacity: 0.9
                                }}>
                                    I'm always excited to discuss new opportunities, innovative projects, 
                                    or simply connect with fellow data enthusiasts.
                                </p>
                                
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <a 
                                        href={`mailto:${personalInfo.email}`}
                                        style={{
                                            backgroundColor: COLORS.textWhite,
                                            color: COLORS.primary,
                                            border: `2px solid ${COLORS.textWhite}`,
                                            padding: '1rem 2rem',
                                            borderRadius: '50px',
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
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
                                        <i className="bi bi-envelope me-2" />
                                        Send Email
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/omar-barrera-swe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: COLORS.textWhite,
                                            border: `2px solid ${COLORS.textWhite}`,
                                            padding: '1rem 2rem',
                                            borderRadius: '50px',
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            transition: 'all 0.3s ease',
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
                                        <i className="bi bi-linkedin me-2" />
                                        Connect on LinkedIn
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

export default AboutMe;
