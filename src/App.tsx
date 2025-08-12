import React from 'react';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { COLORS, TYPOGRAPHY } from './constants';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Gallery from './pages/Gallery';
import Resume from './pages/Resume';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${COLORS.border}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
  };

  const brandStyle: React.CSSProperties = {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.fontWeights.bold,
    color: COLORS.textPrimary,
    textDecoration: 'none',
    fontFamily: TYPOGRAPHY.fontFamily,
    transition: 'color 0.3s ease',
  };

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.fontWeights.medium,
    color: isActive ? COLORS.primary : COLORS.textPrimary,
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    fontFamily: TYPOGRAPHY.fontFamily,
  });

  const navItems = [
    { path: '/', label: 'Home', icon: 'bi-house' },
    { path: '/projects', label: 'Projects', icon: 'bi-folder' },
    { path: '/about', label: 'About', icon: 'bi-person' },
    { path: '/gallery', label: 'Gallery', icon: 'bi-images' },
    { path: '/resume', label: 'Resume', icon: 'bi-file-person' },
  ];

  return (
    <nav style={navStyle}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" style={brandStyle}>
            <i className="bi bi-code-slash me-2" />
            Omar Barrera
          </Link>
          
          <div className="d-none d-lg-flex gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={navLinkStyle(isActive)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = isScrolled 
                        ? 'rgba(102, 126, 234, 0.1)' 
                        : 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <i className={`${item.icon} me-2`} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="d-lg-none btn"
            type="button"
            onClick={toggleMobileMenu}
            style={{
              border: 'none',
              background: 'none',
              color: COLORS.textPrimary,
              fontSize: '1.5rem',
              padding: '0.5rem',
              borderRadius: '8px'
            }}
            aria-label="Toggle mobile menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`} />
          </button>
        </div>

        {/* Mobile navigation */}
        <div 
          className={`d-lg-none mt-3 ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            borderRadius: '12px',
            padding: '1rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="d-block"
                onClick={closeMobileMenu}
                style={{
                  ...navLinkStyle(isActive),
                  color: isActive ? COLORS.primary : COLORS.textPrimary,
                  display: 'block',
                  marginBottom: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: isActive ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                  fontSize: '1.1rem'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <i className={`${item.icon} me-3`} style={{ width: '20px' }} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: TYPOGRAPHY.fontFamily }}>
        <Navigation />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
