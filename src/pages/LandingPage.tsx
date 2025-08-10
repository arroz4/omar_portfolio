import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage: React.FC = () => {
    const omarImages = [
        'omar/omar_best.jpg',
        'omar/omar_cowboy.jpg',
        'omar/omar_cowboy2.jpg',
        'omar/omar_parade.jpg',
    ].map((img) => `${process.env.PUBLIC_URL}/images/${img}`);

    return (
        <div>
            <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: '#F5F7FA', padding: '20px', borderRadius: '10px' }}>
                <h1 style={{ color: '#4A90E2' }}>Welcome to My Portfolio</h1>
                <div className="container">
                    <Carousel interval={3000} style={{ marginBottom: '20px', maxWidth: '400px', margin: '0 auto' }}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={omarImages[0]}
                                alt="First slide"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={omarImages[1]}
                                alt="Second slide"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={omarImages[2]}
                                alt="Third slide"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={omarImages[3]}
                                alt="Fourth slide"
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br />
                <br />
                <p style={{ color: '#7F8C8D' }}>Hello! My name is Omar Barrera, and I am a passionate data engineer specializing in Azure technologies. Welcome to my portfolio!</p>
                <a href="https://www.linkedin.com/in/omar-barrera-swe" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px' }}>
                    <i className="bi bi-linkedin" style={{ fontSize: '24px', color: '#0077B5' }}></i>
                </a>
                <a href="https://github.com/arroz4?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', marginLeft: '10px' }}>
                    <i className="bi bi-github" style={{ fontSize: '24px', color: '#333' }}></i>
                </a>
                <a href="mailto:omarb22@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', marginLeft: '10px' }}>
                    <i className="bi bi-envelope" style={{ fontSize: '24px', color: '#D44638' }}></i>
                </a>
            </div>
            

            <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <section>
                    <h2 style={{ color: '#34495E' }}>Skills</h2>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
                        <div className="row" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
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
                        </div>
                        <div className="row" style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
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
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
