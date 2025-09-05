import React, { useState } from 'react';
import { projects } from '../portfolioData';
import './Projects.css';

const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? project.imageUrls.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNextImage = () => {
        const isLastImage = currentImageIndex === project.imageUrls.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <section className="feature">
            <div className="image-carousel">
                <button className="carousel-arrow left" onClick={goToPreviousImage} aria-label="Previous image">
                     <span aria-hidden="true">&#10094;</span>
                </button>
                <img src={project.imageUrls[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
                <button className="carousel-arrow right" onClick={goToNextImage} aria-label="Next image">
                    <span aria-hidden="true">&#10095;</span>
                </button>
                <div className="carousel-dots">
                    {project.imageUrls.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="actions">
                <li><a href={project.repoUrl} className="button">View Code</a></li>
              </ul>
            </div>
        </section>
    );
};


const Projects = ({ onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstProject = currentIndex === 0;
    const newIndex = isFirstProject ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastProject = currentIndex === projects.length - 1;
    const newIndex = isLastProject ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="two" className="wrapper style2">
        <div className="container">
            <header className="major">
                <h2>Featured Projects</h2>
            </header>
            <div className="features-slider">
                <div className="slider-arrow left" onClick={goToPrevious}>&#10094;</div>
                <ProjectCard project={projects[currentIndex]} />
                <div className="slider-arrow right" onClick={goToNext}>&#10095;</div>
            </div>
            <ul className="actions major">
                <li><a href="#three" className="button" onClick={onButtonClick}>Get In Touch</a></li>
            </ul>
        </div>
    </section>
  );
};

export default Projects;
