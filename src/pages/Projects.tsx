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
    // Template projects - replace with your actual projects
    const projects: Project[] = React.useMemo(() => [
        {
            id: 1,
            title: "Azure Data Pipeline Architecture",
            description: "Scalable ETL pipeline processing 10M+ records daily using Azure Data Factory and Synapse Analytics",
            longDescription: "Designed and implemented a comprehensive data pipeline architecture that processes over 10 million records daily. The solution includes automated data ingestion from multiple sources, real-time data transformation using Azure Data Factory, and advanced analytics capabilities through Azure Synapse Analytics. Implemented monitoring and alerting systems for 99.9% uptime.",
            technologies: ["Azure Data Factory", "Azure Synapse", "Python", "SQL", "PowerBI"],
            githubUrl: "https://github.com/yourusername/azure-pipeline",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/project1.jpg`,
            category: "Data Engineering",
            featured: true,
            status: "Completed"
        },
        {
            id: 2,
            title: "Real-time Analytics Dashboard",
            description: "Interactive Power BI dashboard providing real-time insights for business stakeholders",
            longDescription: "Built a comprehensive real-time analytics dashboard using Power BI that provides actionable insights to business stakeholders. The dashboard connects to multiple data sources including SQL databases, APIs, and cloud storage, featuring automated data refresh and interactive visualizations that help drive strategic decisions.",
            technologies: ["Power BI", "DAX", "Azure SQL", "Python", "REST APIs"],
            liveUrl: "https://app.powerbi.com/your-dashboard",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/project2.jpg`,
            category: "Analytics",
            featured: true,
            status: "Completed"
        },
        {
            id: 3,
            title: "Machine Learning Model Deployment",
            description: "MLOps pipeline for automated model training, validation, and deployment on Azure ML",
            longDescription: "Developed an end-to-end MLOps pipeline using Azure Machine Learning that automates the entire machine learning lifecycle. The pipeline includes automated data preprocessing, model training with hyperparameter tuning, model validation, and deployment to production endpoints with monitoring and retraining capabilities.",
            technologies: ["Azure ML", "Python", "MLflow", "Docker", "Azure DevOps"],
            githubUrl: "https://github.com/yourusername/ml-pipeline",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/project3.jpg`,
            category: "Machine Learning",
            featured: false,
            status: "In Progress"
        },
        {
            id: 4,
            title: "Data Quality Framework",
            description: "Automated data quality monitoring and validation framework for enterprise data systems",
            longDescription: "Created a comprehensive data quality framework that automatically monitors and validates data across enterprise systems. The framework includes configurable data quality rules, anomaly detection, automated reporting, and integration with existing data pipelines to ensure data integrity and reliability.",
            technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Grafana"],
            githubUrl: "https://github.com/yourusername/data-quality",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/project4.jpg`,
            category: "Data Engineering",
            featured: false,
            status: "Completed"
        },
        {
            id: 5,
            title: "Interactive Portfolio Website",
            description: "Modern, responsive portfolio website built with React and TypeScript",
            longDescription: "Designed and developed this modern, responsive portfolio website using React and TypeScript. Features include dynamic content loading, interactive animations, optimized performance, and a modern design system. The site is deployed on GitHub Pages with automated CI/CD pipelines.",
            technologies: ["React", "TypeScript", "Bootstrap", "GitHub Pages"],
            githubUrl: "https://github.com/arroz4/omar_portfolio",
            liveUrl: "https://arroz4.github.io/omar_portfolio/",
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/portfolio.jpg`,
            category: "Web Development",
            featured: true,
            status: "Completed"
        },
        {
            id: 6,
            title: "Cloud Cost Optimization Tool",
            description: "Azure cost analysis and optimization recommendations engine",
            longDescription: "Built an intelligent cost optimization tool that analyzes Azure resource usage patterns and provides actionable recommendations for cost reduction. The tool includes automated scanning, cost forecasting, resource right-sizing suggestions, and integration with Azure Cost Management APIs.",
            technologies: ["Python", "Azure APIs", "Flask", "React", "Chart.js"],
            imageUrl: `${process.env.PUBLIC_URL}/images/projects/project6.jpg`,
            category: "Analytics",
            featured: false,
            status: "Planning"
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

    const featuredProjects = React.useMemo(() => 
        projects.filter(project => project.featured), [projects]
    );

    const getStatusColor = (status: Project['status']) => {
        switch (status) {
            case 'Completed': return COLORS.success;
            case 'In Progress': return COLORS.warning;
            case 'Planning': return COLORS.info;
            default: return COLORS.textSecondary;
        }
    };

    const getCategoryColor = (category: Project['category']) => {
        switch (category) {
            case 'Data Engineering': return COLORS.primary;
            case 'Web Development': return COLORS.secondary;
            case 'Machine Learning': return COLORS.accent;
            case 'Analytics': return COLORS.info;
            default: return COLORS.textSecondary;
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

            {/* Featured Projects */}
            <section style={{ padding: '5rem 0' }}>
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
                                        <i className="bi bi-folder-fill" style={{
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
                                            <span style={{
                                                color: getStatusColor(project.status),
                                                fontSize: TYPOGRAPHY.sizes.sm,
                                                fontWeight: TYPOGRAPHY.fontWeights.medium
                                            }}>
                                                {project.status}
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
                                        <i className="bi bi-code-square" style={{
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
                                            <span style={{
                                                color: getStatusColor(project.status),
                                                fontSize: TYPOGRAPHY.sizes.xs,
                                                fontWeight: TYPOGRAPHY.fontWeights.medium
                                            }}>
                                                {project.status}
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
                                            <span style={{
                                                fontSize: TYPOGRAPHY.sizes.xs,
                                                color: COLORS.textLight
                                            }}>
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
