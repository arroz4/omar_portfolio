import React from 'react';
import { COLORS, COMMON_STYLES, TYPOGRAPHY } from '../constants';

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

const Projects: React.FC = () => {
    // Real GitHub projects from https://github.com/arroz4 - Updated with actual repositories
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
            id: 4,
            title: "AI Sticky Notes MCP Server",
            description: "FastMCP-powered note management system with AI integration and enterprise deployment capabilities",
            longDescription: "An AI-powered sticky notes server built with FastMCP that provides note management capabilities through MCP tools and resources. Features include adding, reading, and summarizing notes with AI integration. Includes comprehensive enterprise deployment guide and Docker containerization for Azure deployment.",
            technologies: ["Python", "FastMCP", "Docker", "Azure Container Apps", "AI Integration"],
            githubUrl: "https://github.com/arroz4/NotesMCP",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/notes-mcp.jpg`,
            category: "Data Engineering",
            featured: false,
            status: "Completed"
        },
        {
            id: 5,
            title: "Logistic Regression Analysis",
            description: "Comprehensive machine learning project analyzing advertising data with 93% accuracy prediction model",
            longDescription: "Complete machine learning project using logistic regression to predict ad click-through rates. Features extensive exploratory data analysis, data visualization with Seaborn and Matplotlib, feature engineering, and model evaluation. Achieved 93% accuracy with detailed classification reports and confusion matrix analysis. Includes correlation analysis and joint plots for data insights.",
            technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
            githubUrl: "https://github.com/arroz4/Logistic-Regression-Project",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/logistic-regression.jpg`,
            category: "Machine Learning",
            featured: false,
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

    const categories = ['All', 'Data Engineering', 'Web Development', 'Machine Learning', 'Analytics'];
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [filteredProjects, setFilteredProjects] = React.useState(projects);

    React.useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory, projects]);

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
                    <div className="text-center fade-in-up">
                        <h1 style={{
                            ...COMMON_STYLES.sectionTitle,
                            color: COLORS.textWhite,
                            fontSize: TYPOGRAPHY.sizes['5xl'],
                            marginBottom: '1rem'
                        }}>
                            My Projects
                        </h1>
                        <p style={{
                            ...COMMON_STYLES.sectionSubtitle,
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: TYPOGRAPHY.sizes.xl,
                            maxWidth: '700px'
                        }}>
                            A showcase of my work in data engineering, analytics, and software development. 
                            Each project represents a unique challenge and innovative solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* All Projects */}
            <section style={{ padding: '5rem 0', backgroundColor: COLORS.backgroundWhite }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['3xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.bold,
                            color: COLORS.textPrimary,
                            marginBottom: '1rem'
                        }}>
                            All Projects
                        </h2>
                        
                        {/* Category Filter */}
                        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '25px',
                                        border: `2px solid ${selectedCategory === category ? COLORS.primary : COLORS.border}`,
                                        backgroundColor: selectedCategory === category ? COLORS.primary : 'transparent',
                                        color: selectedCategory === category ? COLORS.textWhite : COLORS.textPrimary,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        fontSize: TYPOGRAPHY.sizes.sm,
                                        fontWeight: TYPOGRAPHY.fontWeights.medium
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredProjects.map((project, index) => (
                            <div key={project.id} className="col-md-6 col-lg-4">
                                <div 
                                    className="card card-hover fade-in-up"
                                    style={{
                                        ...COMMON_STYLES.card,
                                        height: '100%',
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div style={{
                                        height: '180px',
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
                                            fontSize: '3rem',
                                            color: getCategoryColor(project.category),
                                            zIndex: 1
                                        }} />
                                    </div>
                                    
                                    <div style={{ padding: '1.5rem' }}>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <span style={{
                                                backgroundColor: getCategoryColor(project.category),
                                                color: COLORS.textWhite,
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '12px',
                                                fontSize: TYPOGRAPHY.sizes.xs,
                                                fontWeight: TYPOGRAPHY.fontWeights.medium
                                            }}>
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        <h4 style={{
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            color: COLORS.textPrimary,
                                            marginBottom: '0.75rem'
                                        }}>
                                            {project.title}
                                        </h4>
                                        
                                        <p style={{
                                            color: COLORS.textSecondary,
                                            marginBottom: '1rem',
                                            fontSize: TYPOGRAPHY.sizes.sm,
                                            lineHeight: '1.5'
                                        }}>
                                            {project.description}
                                        </p>
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span 
                                                style={{
                                                    fontSize: TYPOGRAPHY.sizes.xs,
                                                    color: COLORS.textLight,
                                                    cursor: 'pointer'
                                                }}
                                                title={project.technologies.join(', ')}
                                            >
                                                {project.technologies.slice(0, 2).join(', ')}
                                                {project.technologies.length > 2 && ` +${project.technologies.length - 2}`}
                                            </span>
                                            
                                            <div className="d-flex gap-2">
                                                {project.githubUrl && (
                                                    <a 
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: COLORS.textSecondary,
                                                            fontSize: '1.1rem',
                                                            transition: 'color 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-github" />
                                                    </a>
                                                )}
                                                {project.liveUrl && (
                                                    <a 
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: COLORS.primary,
                                                            fontSize: '1.1rem',
                                                            transition: 'color 0.3s ease'
                                                        }}
                                                    >
                                                        <i className="bi bi-box-arrow-up-right" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-5">
                        <div style={{
                            background: COLORS.gradientCard,
                            padding: '3rem',
                            borderRadius: '20px',
                            border: `1px solid ${COLORS.border}`
                        }}>
                            <h3 style={{
                                fontSize: TYPOGRAPHY.sizes['2xl'],
                                fontWeight: TYPOGRAPHY.fontWeights.bold,
                                color: COLORS.textPrimary,
                                marginBottom: '1rem'
                            }}>
                                Interested in collaborating?
                            </h3>
                            <p style={{
                                color: COLORS.textSecondary,
                                marginBottom: '2rem',
                                maxWidth: '500px',
                                margin: '0 auto 2rem auto'
                            }}>
                                I'm always open to discussing new opportunities and interesting projects. 
                                Let's build something amazing together!
                            </p>
                            <a 
                                href="mailto:omarb22@gmail.com"
                                style={{
                                    ...COMMON_STYLES.primaryButton,
                                    textDecoration: 'none'
                                }}
                            >
                                <i className="bi bi-envelope me-2" />
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
