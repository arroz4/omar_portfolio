import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i className="bi bi-floppy me-2"></i>Omar Barrera
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" style={{ fontSize: '1.1rem' }}>Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{ fontSize: '1.1rem' }}>About Me</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery" style={{ fontSize: '1.1rem' }}>Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume" style={{ fontSize: '1.1rem' }}>Resume</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
