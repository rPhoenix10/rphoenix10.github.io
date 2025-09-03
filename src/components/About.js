import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import Ranier from '../images/nature/ranier.jpg';
import Beach from '../images/nature/beach.jpg';
import Blanca from '../images/nature/blanca.jpg';
import Oregon from '../images/nature/oregon.jpg';
import Ruston from '../images/nature/ruston.jpg';

const images = [
    { src: Ranier, label: 'Above the clouds, Mount Rainier' },
    { src: Beach, label: 'A Beach Sunset' },
    { src: Blanca, label: 'Lake Blanca' },
    { src: Oregon, label: 'The Oregon Coast' },
    { src: Ruston, label: 'The Point Ruston ship vessel, the Mount Ranier as a background' }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(true);
    const timeoutRef = useRef(null);
    const touchStartY = useRef(0);

    const resetTimeout = () => { if (timeoutRef.current) { clearTimeout(timeoutRef.current); } }
    useEffect(() => { resetTimeout();
        if (!isPaused) { timeoutRef.current = setTimeout(() =>
            setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1), 3000); }
            return () => { resetTimeout(); }; }, [currentIndex, isPaused]);
    const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const handleTouchEnd = (e) => { const touchEndY = e.changedTouches[0].clientY;
        if (touchStartY.current - touchEndY > 50) { setShowControls(true); } };

    return (
        <section id="one">
            <div className={`spotlight container ${!isContentVisible ? 'gallery-expanded' : ''}`}>
                <div 
                    className={`image-gallery ${showControls ? 'controls-visible' : ''}`}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        className="main-image"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <img src={images[currentIndex].src} alt={images[currentIndex].label} />
                        <div className="slideshow-progress"></div>
                        <div className="thumbnails">
                            {images.map((img, index) => (
                                <div 
                                    key={index} 
                                    className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <img src={img.src} alt={`Thumbnail of ${img.label}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    < br/>
                    <ul className="actions">
                        <li><a href="#two" className="button">See My Work</a></li>
                    </ul>
                    <button 
                        className={`autoplay-toggle ${isPaused ? '' : 'active'}`}
                        onClick={() => setIsPaused(!isPaused)}
                        title={isPaused ? 'Resume Autoplay' : 'Pause Autoplay'}
                    >
                        <i className={isPaused ? "fas fa-play" : "fas fa-pause"}></i>
                    </button>
                    <button 
                        className="collapse-toggle-icon" 
                        onClick={() => setIsContentVisible(!isContentVisible)}
                        title={isContentVisible ? 'View Images' : 'View About Me'}
                    >
                        <i className={`fas ${isContentVisible ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                    </button>                    
                </div>
                <div className={`content-wrapper ${isContentVisible ? 'visible' : ''}`}>
                    <div className="content">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>I'm a passionate web developer based in Kent, 
                            WA, with a knack for creating intuitive and dynamic user experiences. 
                            My journey into tech was fueled by the Web &
                            App Development Program at <strong>Ancora Training</strong>,
                            where I dove deep into modern web fundamentals, 
                            from advanced JavaScript and APIs to React.</p>
                        <p>I thrive in collaborative environments and enjoyed contributing to the
                            <strong> Digital Keys capstone project</strong> at Bellevue College. 
                            I'm eager to apply my skills in a professional setting and
                            help build amazing applications.</p>
                    </div>
                </div>                    
            </div>
        </section>
    );
};

export default About;
