import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '../constants';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  category: 'Data Engineering' | 'Web Development' | 'Machine Learning' | 'Analytics';
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Planning';
}

const LandingPage: React.FC = () => {
    const omarImages = [
        'omar/omar_best.jpg',
        'omar/omar_cowboy2.jpg',
        'omar/omar_parade.jpg',
        'omar/_MG_1203.jpg',
        'omar/1000053095.jpg',
        'omar/1000062801.jpg',
        'omar/1000063044.jpg',
        'omar/1000063077.jpg',
    ].map((img) => `${process.env.PUBLIC_URL}/images/${img}`);

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Real GitHub projects from https://github.com/arroz4 - Featured projects only
    const projects: Project[] = React.useMemo(() => [
        {
            id: 1,
            title: "Azure DevOps MCP Server",
            description: "Model Context Protocol server for Azure DevOps work item management with comprehensive REST API integration",
            longDescription: "A comprehensive MCP server that provides seamless integration with Azure DevOps work items. Features include creating, updating, retrieving work items, managing work item relationships, and querying using WIQL. Built with modular architecture using Python and FastMCP, deployed as containerized solution with Azure Container Apps for enterprise scalability.",
            technologies: ["Python", "FastMCP", "Azure DevOps API", "Docker", "Azure Container Apps"],
            githubUrl: "https://github.com/arroz4/azure-devops-mcp-server",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/azure-devops-mcp.jpg`,
            category: "Data Engineering",
            featured: true,
            status: "Completed"
        },
        {
            id: 2,
            title: "ADO Instruction MCP Server",
            description: "Advanced Azure OpenAI image processing server with dependency arrow detection and analysis",
            longDescription: "Sophisticated MCP server that processes images using Azure OpenAI's vision capabilities to detect and analyze dependency arrows in diagrams. Features automatic arrow detection, relationship mapping, and structured output generation. Deployed on Azure with enterprise-grade security and monitoring.",
            technologies: ["Python", "Azure OpenAI", "Computer Vision", "FastMCP", "Azure Container Apps"],
            githubUrl: "https://github.com/arroz4/ado-instruction-mcp-server",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/ado-instruction-mcp.jpg`,
            category: "Machine Learning",
            featured: true,
            status: "Completed"
        },
        {
            id: 3,
            title: "Full-Stack Movie Website",
            description: "Complete web application with React frontend and C# API backend for movie discovery and management",
            longDescription: "A full-stack web application featuring a modern React frontend with responsive design and a robust C# Web API backend. Includes user authentication, movie search and filtering, detailed movie information display, and user review system. Demonstrates proficiency in both frontend and backend development with clean architecture patterns.",
            technologies: ["React", "C#", "Web API", "Entity Framework", "SQL Server", "Bootstrap"],
            githubUrl: "https://github.com/arroz4/MovieWebsite",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/movie-website.jpg`,
            category: "Web Development",
            featured: true,
            status: "Completed"
        },
        {
            id: 6,
            title: "Interactive Portfolio Website",
            description: "Modern, responsive portfolio website built with React and TypeScript showcasing professional projects",
            longDescription: "This modern, responsive portfolio website built with React 19 and TypeScript. Features include dynamic project filtering, interactive animations, comprehensive project showcase, and professional design system. Deployed with GitHub Pages and automated CI/CD pipelines for seamless updates and maintenance.",
            technologies: ["React", "TypeScript", "Bootstrap", "GitHub Pages", "CI/CD"],
            githubUrl: "https://github.com/arroz4/omar_portfolio",
            liveUrl: "https://arroz4.github.io/omar_portfolio/",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/portfolio.jpg`,
            category: "Web Development",
            featured: true,
            status: "Completed"
        }
    ], []);

    const featuredProjects = React.useMemo(() => 
        projects.filter(project => project.featured), [projects]
    );

    const getCategoryColor = (category: Project['category']) => {
        switch (category) {
            case 'Data Engineering': return COLORS.primary;
            case 'Web Development': return COLORS.secondary;
            case 'Machine Learning': return COLORS.accent;
            case 'Analytics': return COLORS.info;
            default: return COLORS.textSecondary;
        }
    };

    const getCategoryIcon = (category: Project['category']) => {
        switch (category) {
            case 'Data Engineering': return 'bi-database-gear';
            case 'Web Development': return 'bi-laptop';
            case 'Machine Learning': return 'bi-robot';
            case 'Analytics': return 'bi-graph-up-arrow';
            default: return 'bi-code-square';
        }
    };

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
                                    <button 
                                        onClick={() => scrollToSection('projects')}
                                        className="btn btn-primary"
                                        style={{
                                            ...COMMON_STYLES.primaryButton,
                                            background: COLORS.gradientSecondary,
                                            border: 'none',
                                        }}
                                    >
                                        <i className="bi bi-arrow-down me-2" />
                                        View My Projects
                                    </button>
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
                            <div className="fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                                <div style={carouselContainerStyle}>
                                    <Carousel 
                                        interval={4000} 
                                        controls={false} 
                                        indicators={true}
                                    >
                                        {omarImages.map((img, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={img}
                                                    alt={`Omar Barrera ${index + 1}`}
                                                    style={{ 
                                                        height: '500px', 
                                                        objectFit: 'cover',
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

            {/* Featured Projects Section */}
            <section id="projects" style={{ padding: '5rem 0', backgroundColor: COLORS.backgroundLight }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            Featured Projects
                        </h2>
                        <p style={{
                            fontSize: TYPOGRAPHY.sizes.lg,
                            color: COLORS.textSecondary,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Highlighting some of my most impactful and innovative work
                        </p>
                    </div>

                    <div className="row g-4">
                        {featuredProjects.map((project, index) => (
                            <div key={project.id} className="col-lg-6">
                                <div 
                                    className="card card-hover fade-in-up"
                                    style={{
                                        ...COMMON_STYLES.card,
                                        height: '100%',
                                        animationDelay: `${index * 0.2}s`
                                    }}
                                >
                                    <div style={{
                                        height: '250px',
                                        backgroundColor: COLORS.backgroundLight,
                                        borderRadius: '12px 12px 0 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            background: getCategoryColor(project.category),
                                            width: '100%',
                                            height: '100%',
                                            opacity: 0.1,
                                            position: 'absolute'
                                        }} />
                                        <i className={`bi ${getCategoryIcon(project.category)}`} style={{
                                            fontSize: '4rem',
                                            color: getCategoryColor(project.category),
                                            zIndex: 1
                                        }} />
                                    </div>
                                    
                                    <div style={{ padding: '2rem' }}>
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <span style={{
                                                backgroundColor: getCategoryColor(project.category),
                                                color: COLORS.textWhite,
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: TYPOGRAPHY.sizes.sm,
                                                fontWeight: TYPOGRAPHY.fontWeights.medium
                                            }}>
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        <h3 style={{
                                            fontSize: TYPOGRAPHY.sizes.xl,
                                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                                            color: COLORS.textPrimary,
                                            marginBottom: '1rem'
                                        }}>
                                            {project.title}
                                        </h3>
                                        
                                        <p style={{
                                            color: COLORS.textSecondary,
                                            marginBottom: '1.5rem',
                                            lineHeight: '1.6'
                                        }}>
                                            {project.longDescription}
                                        </p>
                                        
                                        <div className="mb-3">
                                            <div className="d-flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        style={{
                                                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                                            color: COLORS.primary,
                                                            padding: '0.25rem 0.5rem',
                                                            borderRadius: '6px',
                                                            fontSize: TYPOGRAPHY.sizes.sm
                                                        }}
                                                        title={tech}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex gap-3">
                                            {project.githubUrl && (
                                                <a 
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        ...COMMON_STYLES.secondaryButton,
                                                        padding: '0.5rem 1rem',
                                                        fontSize: TYPOGRAPHY.sizes.sm
                                                    }}
                                                >
                                                    <i className="bi bi-github me-2" />
                                                    Code
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a 
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        ...COMMON_STYLES.primaryButton,
                                                        padding: '0.5rem 1rem',
                                                        fontSize: TYPOGRAPHY.sizes.sm
                                                    }}
                                                >
                                                    <i className="bi bi-box-arrow-up-right me-2" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Projects Link */}
                    <div className="text-center mt-5">
                        <Link 
                            to="/projects"
                            style={{
                                ...COMMON_STYLES.primaryButton,
                                textDecoration: 'none'
                            }}
                        >
                            <i className="bi bi-collection me-2" />
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
