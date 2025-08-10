import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SkillsSection from '../components/SkillsSection';
import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '../constants';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage: React.FC = () => {
    const omarImages = [
        'omar/omar_best.jpg',
        'omar/omar_cowboy.jpg',
        'omar/omar_cowboy2.jpg',
        'omar/omar_parade.jpg',
    ].map((img) => `${process.env.PUBLIC_URL}/images/${img}`);

    const heroSectionStyle: React.CSSProperties = {
        background: COLORS.gradientPrimary,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const heroContentStyle: React.CSSProperties = {
        zIndex: 2,
        position: 'relative',
    };

    const carouselContainerStyle: React.CSSProperties = {
        maxWidth: '500px',
        margin: '0 auto',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        border: `4px solid ${COLORS.backgroundWhite}`,
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={heroSectionStyle}>
                {/* Background decorations */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }} />

                <div className="container" style={heroContentStyle}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                            <div className="fade-in-up">
                                <h1 
                                    className="display-3 fw-bold mb-4"
                                    style={{ 
                                        color: COLORS.textWhite,
                                        fontFamily: TYPOGRAPHY.fontFamily,
                                        lineHeight: '1.2',
                                    }}
                                >
                                    Welcome to My
                                    <span className="d-block" style={{ 
                                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>
                                        Portfolio
                                    </span>
                                </h1>
                                <p 
                                    className="lead mb-4"
                                    style={{ 
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: TYPOGRAPHY.sizes.xl,
                                        fontFamily: TYPOGRAPHY.fontFamily,
                                        maxWidth: '500px',
                                    }}
                                >
                                    Hello! I'm Omar Barrera, a passionate data engineer specializing in Azure technologies. 
                                    I transform data into actionable insights that drive business decisions.
                                </p>
                                
                                {/* Social Links */}
                                <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                                    <a 
                                        href="https://www.linkedin.com/in/omar-barrera-swe" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{
                                            ...COMMON_STYLES.socialIcon,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: COLORS.textWhite,
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        <i className="bi bi-linkedin" style={{ fontSize: '24px' }} />
                                    </a>
                                    <a 
                                        href="https://github.com/arroz4?tab=repositories" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{
                                            ...COMMON_STYLES.socialIcon,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: COLORS.textWhite,
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        <i className="bi bi-github" style={{ fontSize: '24px' }} />
                                    </a>
                                    <a 
                                        href="mailto:omarb22@gmail.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{
                                            ...COMMON_STYLES.socialIcon,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: COLORS.textWhite,
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        <i className="bi bi-envelope" style={{ fontSize: '24px' }} />
                                    </a>
                                </div>

                                {/* CTA Buttons */}
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                    <a 
                                        href="#skills" 
                                        className="btn btn-primary"
                                        style={{
                                            ...COMMON_STYLES.primaryButton,
                                            background: COLORS.gradientSecondary,
                                            border: 'none',
                                        }}
                                    >
                                        <i className="bi bi-arrow-down me-2" />
                                        Explore My Skills
                                    </a>
                                    <a 
                                        href="#contact" 
                                        className="btn btn-secondary"
                                        style={{
                                            ...COMMON_STYLES.secondaryButton,
                                            backgroundColor: 'transparent',
                                            color: COLORS.textWhite,
                                            borderColor: COLORS.textWhite,
                                        }}
                                    >
                                        <i className="bi bi-chat-dots me-2" />
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="slide-in-right" style={{ animationDelay: '0.3s' }}>
                                <div style={carouselContainerStyle}>
                                    <Carousel interval={4000} fade>
                                        {omarImages.map((img, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={img}
                                                    alt={`Omar Barrera ${index + 1}`}
                                                    style={{ 
                                                        height: '500px', 
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.5s ease',
                                                    }}
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <div id="skills">
                <SkillsSection 
                    title="Technical Expertise"
                    subtitle="Cutting-edge technologies and frameworks I use to build scalable data solutions"
                    showTitle={true}
                    backgroundColor={COLORS.backgroundLight}
                    className="py-5"
                />
            </div>
        </div>
    );
};

export default LandingPage;
