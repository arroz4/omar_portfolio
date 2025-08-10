import React from 'react';

const Resume: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/files/OmarBarrera_CV2025.pdf`;
        link.download = 'OmarBarrera_CV2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#2C3E50' }}>
            <h1 style={{ textAlign: 'center', color: '#4A90E2', marginBottom: '30px' }}>Resume</h1>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#34495E', borderBottom: '2px solid #4A90E2', paddingBottom: '5px', marginBottom: '20px' }}>Experience</h2>
                <div style={{ backgroundColor: '#EAF6FF', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ margin: '0', color: '#2C3E50' }}>Software Engineer - Microsoft (Mexico City)</h3>
                    <p style={{ fontStyle: 'italic', color: '#7F8C8D' }}>May 2022 - Current</p>
                    <p>I was part of the Finance Insights department where we developed tools for reporting and information delivery environments. I worked with big data sources performing transformations that brought actionable insights to up to 30k users from the finance department.</p>
                    <p>Tasks included data warehousing, custom data models for specific purposes, ETL, orchestration, and implementing business logic to present information with high impact.</p>
                </div>

                <div style={{ backgroundColor: '#EAF6FF', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ margin: '0', color: '#2C3E50' }}>Data Engineer - Wyde Corporation / Hewlett Packard (Guadalajara)</h3>
                    <p style={{ fontStyle: 'italic', color: '#7F8C8D' }}>March 2021 - April 2022</p>
                    <p>Developed ETL pipelines for sales teams with high availability. Also involved in system automation and database maintenance. Built dashboards and visual integration systems for financial analysis of sales teams.</p>
                </div>

                <div style={{ backgroundColor: '#EAF6FF', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ margin: '0', color: '#2C3E50' }}>BI Analyst - G-Global (San Diego/Tijuana)</h3>
                    <p style={{ fontStyle: 'italic', color: '#7F8C8D' }}>July 2020 - Jan 2021</p>
                    <p>Managed KPI dashboard portfolio by applying different tools. Developed systems for warehouse inventory verification through a web application. Automated workflows through scripts to improve warehouse process flow in WMS. Conducted statistical analysis of high-volume products to impact import/export output.</p>
                </div>
            </section>

            <section>
                <h2 style={{ color: '#34495E', borderBottom: '2px solid #4A90E2', paddingBottom: '5px', marginBottom: '20px' }}>Education</h2>
                <div style={{ backgroundColor: '#EAF6FF', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ margin: '0', color: '#2C3E50' }}>Industrial Engineering - Universidad La Salle Noroeste</h3>
                    <p style={{ fontStyle: 'italic', color: '#7F8C8D' }}>Graduated December 2019</p>
                </div>
            </section>

            <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <section>
                    <h2 style={{ color: '#34495E', borderBottom: '2px solid #4A90E2', paddingBottom: '5px', marginBottom: '20px', textAlign: 'left' }}>Skills</h2>
                    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Programming Languages</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-code-slash"></i> Python</li>
                                <li><i className="bi bi-code"></i> Scala</li>
                                <li><i className="bi bi-code"></i> C#</li>
                                <li><i className="bi bi-code"></i> Java</li>
                                <li><i className="bi bi-bar-chart"></i> R</li>
                                <li><i className="bi bi-code"></i> JavaScript</li>
                                <li><i className="bi bi-code"></i> TypeScript</li>
                            </ul>
                        </div>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Data Engineering</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-lightning"></i> Pyspark</li>
                                <li><i className="bi bi-database"></i> SQL/NoSQL</li>
                                <li><i className="bi bi-gear"></i> Airflow</li>
                            </ul>
                        </div>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Azure & Cloud</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-cloud"></i> Azure</li>
                                <li><i className="bi bi-bar-chart"></i> Azure Synapse Analytics</li>
                                <li><i className="bi bi-lightning"></i> Azure Databricks</li>
                                <li><i className="bi bi-tools"></i> Azure DevOps</li>
                                <li><i className="bi bi-cloud"></i> Azure Cloud Functions</li>
                                <li><i className="bi bi-cloud"></i> Azure Logic Apps</li>
                                <li><i className="bi bi-cloud"></i> Microsoft Fabric</li>
                            </ul>
                        </div>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Visualization & BI</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-pie-chart"></i> Power BI</li>
                                <li><i className="bi bi-bar-chart"></i> DAX</li>
                                <li><i className="bi bi-bar-chart"></i> Semantic Models</li>
                                <li><i className="bi bi-bar-chart"></i> Statistics</li>
                                <li><i className="bi bi-bar-chart"></i> Forecasting</li>
                            </ul>
                        </div>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Development & Tools</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-code"></i> ASP.NET</li>
                                <li><i className="bi bi-laptop"></i> Fullstack development</li>
                                <li><i className="bi bi-code-slash"></i> React</li>
                                <li><i className="bi bi-box"></i> Docker</li>
                                <li><i className="bi bi-git"></i> Git</li>
                            </ul>
                        </div>
                        <div className="square" style={{ backgroundColor: '#EAF6FF', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <h5>Other Skills</h5>
                            <ul style={{ listStyleType: 'none', padding: 0, color: '#2C3E50' }}>
                                <li><i className="bi bi-lightning"></i> Machine Learning</li>
                                <li><i className="bi bi-diagram-3"></i> Model Context Protocol</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button 
                    onClick={handleDownload}
                    style={{ 
                        display: 'inline-block', 
                        padding: '10px 20px', 
                        backgroundColor: '#4A90E2', 
                        color: '#fff', 
                        textDecoration: 'none', 
                        borderRadius: '5px', 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        transition: 'background-color 0.3s',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#357ABD'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4A90E2'}
                >
                    Download My CV
                </button>
            </div>
        </div>
    );
};

export default Resume;
