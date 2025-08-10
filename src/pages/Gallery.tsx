import React from 'react';

const Gallery: React.FC = () => {
    const catImages = [
        'cats/IMG_20250415_164855.jpg',
        'cats/IMG_20250505_114422.jpg',
        'cats/IMG_20250506_164137.jpg',
        'cats/IMG_20250506_164153.jpg',
        'cats/IMG_20250506_185925.jpg',
        'cats/IMG_20250527_114131.jpg',
        'cats/IMG_20250527_114134.jpg',
        'cats/IMG_20250527_171712.jpg',
        'cats/IMG_20250527_171721.jpg',
        'cats/IMG_20250527_171726.jpg',
    ].map((img) => `${process.env.PUBLIC_URL}/images/${img}`);

    return (
        <div className="container text-center" style={{ padding: '20px' }}>
            <h1 style={{ color: '#4A90E2' }}>Gallery</h1>
            <p style={{ color: '#7F8C8D' }}>Enjoy the best cat images!</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {catImages.map((src, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img src={src} className="card-img-top" alt={`Cat ${index + 1}`} style={{ borderRadius: '10px' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
