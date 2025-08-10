// Skills data structure and constants
export interface Skill {
  icon: string;
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { icon: "bi-code-slash", name: "Python", description: "Data analysis, machine learning, automation" },
      { icon: "bi-code-square", name: "JavaScript", description: "Web development, frontend applications" },
      { icon: "bi-database", name: "SQL", description: "Database queries, data manipulation" },
      { icon: "bi-terminal", name: "R", description: "Statistical analysis, data visualization" },
      { icon: "bi-gear", name: "C++", description: "System programming, performance optimization" },
      { icon: "bi-file-code", name: "HTML/CSS", description: "Web markup, styling, responsive design" }
    ]
  },
  {
    title: "Cloud Platforms",
    skills: [
      { icon: "bi-cloud", name: "AWS", description: "Cloud infrastructure, EC2, S3, Lambda" },
      { icon: "bi-microsoft", name: "Azure", description: "Cloud services, data analytics, AI/ML" },
      { icon: "bi-google", name: "Google Cloud", description: "BigQuery, Cloud Functions, Storage" },
      { icon: "bi-server", name: "Snowflake", description: "Data warehousing, cloud analytics" }
    ]
  },
  {
    title: "Data Analysis & ML",
    skills: [
      { icon: "bi-graph-up", name: "Pandas", description: "Data manipulation and analysis" },
      { icon: "bi-bar-chart", name: "NumPy", description: "Numerical computing, array operations" },
      { icon: "bi-pie-chart", name: "Matplotlib", description: "Data visualization, plotting" },
      { icon: "bi-diagram-3", name: "Scikit-learn", description: "Machine learning algorithms" },
      { icon: "bi-lightning", name: "TensorFlow", description: "Deep learning, neural networks" },
      { icon: "bi-cpu", name: "PyTorch", description: "Machine learning research, development" }
    ]
  },
  {
    title: "Business Intelligence",
    skills: [
      { icon: "bi-graph-up-arrow", name: "Tableau", description: "Interactive dashboards, data storytelling" },
      { icon: "bi-bar-chart-line", name: "Power BI", description: "Business analytics, reporting" },
      { icon: "bi-table", name: "Excel", description: "Advanced formulas, pivot tables, VBA" },
      { icon: "bi-kanban", name: "Looker", description: "Modern BI, data modeling" }
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { icon: "bi-git", name: "Git", description: "Version control, collaboration" },
      { icon: "bi-github", name: "GitHub", description: "Code hosting, project management" },
      { icon: "bi-terminal", name: "VS Code", description: "Code editing, debugging, extensions" },
      { icon: "bi-ubuntu", name: "Linux", description: "Command line, system administration" },
      { icon: "bi-window-dock", name: "Docker", description: "Containerization, deployment" },
      { icon: "bi-gear-wide-connected", name: "APIs", description: "REST, GraphQL, integration" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: "bi-bootstrap", name: "Bootstrap", description: "Responsive web design, components" },
      { icon: "bi-code-slash", name: "React", description: "Frontend development, component-based UI" },
      { icon: "bi-layers", name: "Node.js", description: "Backend development, server-side JavaScript" },
      { icon: "bi-box", name: "Django", description: "Python web framework, rapid development" },
      { icon: "bi-lightning-charge", name: "Flask", description: "Lightweight Python web framework" },
      { icon: "bi-code", name: "FastAPI", description: "Modern Python API framework" }
    ]
  },
  {
    title: "Data Engineering",
    skills: [
      { icon: "bi-diagram-2", name: "Apache Spark", description: "Big data processing, analytics" },
      { icon: "bi-flow", name: "Airflow", description: "Workflow orchestration, data pipelines" },
      { icon: "bi-hdd-network", name: "ETL", description: "Extract, transform, load processes" },
      { icon: "bi-server", name: "Kafka", description: "Real-time data streaming" },
      { icon: "bi-database-gear", name: "Data Warehousing", description: "OLAP, dimensional modeling" },
      { icon: "bi-diagram-3-fill", name: "Data Pipelines", description: "Automated data workflows" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { icon: "bi-database", name: "PostgreSQL", description: "Advanced SQL, complex queries" },
      { icon: "bi-database-fill", name: "MySQL", description: "Relational database management" },
      { icon: "bi-hdd-stack", name: "MongoDB", description: "NoSQL, document database" },
      { icon: "bi-server", name: "Redis", description: "In-memory data store, caching" },
      { icon: "bi-database-dash", name: "SQLite", description: "Lightweight, embedded database" },
      { icon: "bi-graph-up", name: "InfluxDB", description: "Time series database" }
    ]
  }
];
