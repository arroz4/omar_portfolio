import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY } from '../constants';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>('all');

    const galleryItems = [
        {
            src: 'cats/IMG_20250415_164855.jpg',
            category: 'portraits',
            title: 'Peaceful Moment',
            description: 'A serene cat enjoying a quiet afternoon'
        },
        {
            src: 'cats/IMG_20250505_114422.jpg',
            category: 'candid',
            title: 'Natural Beauty',
            description: 'Capturing authentic expressions'
        },
        {
            src: 'cats/IMG_20250506_164137.jpg',
            category: 'portraits',
            title: 'Curious Gaze',
            description: 'The wonder in their eyes'
        },
        {
            src: 'cats/IMG_20250506_164153.jpg',
            category: 'candid',
            title: 'Playful Spirit',
            description: 'Moments of pure joy'
        },
        {
            src: 'cats/IMG_20250506_185925.jpg',
            category: 'lifestyle',
            title: 'Evening Comfort',
            description: 'Relaxing in the golden hour'
        },
        {
            src: 'cats/IMG_20250527_114131.jpg',
            category: 'portraits',
            title: 'Elegant Pose',
            description: 'Grace and sophistication'
        },
        {
            src: 'cats/IMG_20250527_114134.jpg',
            category: 'candid',
            title: 'Natural Charm',
            description: 'Authentic moments captured'
        },
        {
            src: 'cats/IMG_20250527_171712.jpg',
            category: 'lifestyle',
            title: 'Cozy Corner',
            description: 'Finding comfort in simple spaces'
        },
        {
            src: 'cats/IMG_20250527_171721.jpg',
            category: 'portraits',
            title: 'Thoughtful Expression',
            description: 'Deep in contemplation'
        },
        {
            src: 'cats/IMG_20250527_171726.jpg',
            category: 'lifestyle',
            title: 'Home Sweet Home',
            description: 'Creating memories in everyday moments'
        },
    ].map((item) => ({
        ...item,
        src: `${process.env.PUBLIC_URL}/images/${item.src}`
    }));

    const categories = [
        { key: 'all', label: 'All Photos', icon: 'bi-grid' },
        { key: 'portraits', label: 'Portraits', icon: 'bi-person-circle' },
        { key: 'candid', label: 'Candid', icon: 'bi-camera' },
        { key: 'lifestyle', label: 'Lifestyle', icon: 'bi-house-heart' },
    ];

    const filteredItems = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);

    const heroStyle: React.CSSProperties = {
        background: COLORS.gradientPrimary,
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.textWhite,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const filterButtonStyle = (isActive: boolean): React.CSSProperties => ({
        background: isActive ? COLORS.primary : 'transparent',
        color: isActive ? COLORS.textWhite : COLORS.textPrimary,
        border: `2px solid ${COLORS.primary}`,
        margin: '0.25rem',
        fontSize: TYPOGRAPHY.sizes.sm,
        fontWeight: TYPOGRAPHY.fontWeights.medium,
        transition: 'all 0.3s ease',
        padding: '0.75rem 1.5rem',
        borderRadius: '50px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
    });

    const imageCardStyle: React.CSSProperties = {
        background: COLORS.backgroundCard,
        borderRadius: '16px',
        padding: '0',
        border: 'none',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%',
    };

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        backdropFilter: 'blur(10px)',
    };

    const modalImageStyle: React.CSSProperties = {
        maxWidth: '90vw',
        maxHeight: '90vh',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div style={{ fontFamily: TYPOGRAPHY.fontFamily }}>
            {/* Hero Section */}
            <section style={heroStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 style={{
                                fontSize: TYPOGRAPHY.sizes['4xl'],
                                fontWeight: TYPOGRAPHY.fontWeights.bold,
                                marginBottom: '1.5rem',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}>
                                <i className="bi bi-camera2 me-3" />
                                Photo Gallery
                            </h1>
                            <p style={{
                                fontSize: TYPOGRAPHY.sizes.xl,
                                fontWeight: TYPOGRAPHY.fontWeights.light,
                                opacity: 0.9,
                                lineHeight: 1.6,
                            }}>
                                A collection of precious moments and beautiful memories captured through photography
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section style={{ padding: '4rem 0 2rem', background: COLORS.backgroundLight }}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 style={{
                            fontSize: TYPOGRAPHY.sizes['2xl'],
                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                            color: COLORS.textPrimary,
                            marginBottom: '2rem',
                        }}>
                            Browse by Category
                        </h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            {categories.map((category) => (
                                <button
                                    key={category.key}
                                    style={filterButtonStyle(filter === category.key)}
                                    onClick={() => setFilter(category.key)}
                                    onMouseEnter={(e) => {
                                        if (filter !== category.key) {
                                            e.currentTarget.style.background = COLORS.primary;
                                            e.currentTarget.style.color = COLORS.textWhite;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (filter !== category.key) {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = COLORS.textPrimary;
                                        }
                                    }}
                                >
                                    <i className={`${category.icon} me-2`} />
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: '2rem 0 4rem', background: COLORS.backgroundWhite }}>
                <div className="container">
                    <div className="row g-4">
                        {filteredItems.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div 
                                    style={imageCardStyle}
                                    onClick={() => setSelectedImage(item.src)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                    }}
                                >
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <img 
                                            src={item.src} 
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '250px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            padding: '0.5rem',
                                            borderRadius: '50%',
                                            backdropFilter: 'blur(10px)',
                                        }}>
                                            <i className="bi bi-zoom-in" style={{ color: COLORS.primary }} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <h5 style={{
                                            fontSize: TYPOGRAPHY.sizes.lg,
                                            fontWeight: TYPOGRAPHY.fontWeights.semibold,
                                            color: COLORS.textPrimary,
                                            marginBottom: '0.5rem',
                                        }}>
                                            {item.title}
                                        </h5>
                                        <p style={{
                                            fontSize: TYPOGRAPHY.sizes.sm,
                                            color: COLORS.textSecondary,
                                            margin: 0,
                                            lineHeight: 1.5,
                                        }}>
                                            {item.description}
                                        </p>
                                        <div style={{ marginTop: '1rem' }}>
                                            <span style={{
                                                background: COLORS.gradientSecondary,
                                                color: COLORS.textWhite,
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: TYPOGRAPHY.sizes.xs,
                                                fontWeight: TYPOGRAPHY.fontWeights.medium,
                                                textTransform: 'capitalize',
                                            }}>
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-5">
                            <i className="bi bi-images" style={{ 
                                fontSize: '4rem', 
                                color: COLORS.textSecondary,
                                marginBottom: '1rem',
                                display: 'block'
                            }} />
                            <h3 style={{ color: COLORS.textSecondary }}>No photos found</h3>
                            <p style={{ color: COLORS.textSecondary }}>Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div style={overlayStyle} onClick={() => setSelectedImage(null)}>
                    <button
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            color: COLORS.textWhite,
                            fontSize: '2rem',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            zIndex: 2001,
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <i className="bi bi-x" />
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Gallery view"
                        style={modalImageStyle}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
