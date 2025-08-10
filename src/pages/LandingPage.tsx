import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SkillsSection from '../components/SkillsSection';
import { COLORS } from '../constants/colors';
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
            

            <SkillsSection 
                title="Skills"
                subtitle="Technologies and tools I specialize in"
                showTitle={true}
                backgroundColor={COLORS.backgroundWhite}
                className="my-4"
            />
        </div>
    );
};

export default LandingPage;
