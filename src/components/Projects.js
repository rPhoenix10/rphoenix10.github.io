import React from 'react';
import { projects } from '../portfolioData';
import { useCarousel } from './hooks/useCarousel';
import './Projects.css';

const ProjectCard = ({ project }) => {
    const { currentIndex, setCurrentIndex, goToNext, goToPrevious } = useCarousel(project.imageUrls.length);

    return (
        <section className="feature">
            <div className="image-carousel">
                <button className="carousel-arrow left" onClick={goToPrevious} aria-label="Previous image">
                    <span aria-hidden="true">&#10094;</span>
                </button>
                <img src={project.imageUrls[currentIndex]} alt={`${project.title} screenshot ${currentIndex + 1}`} />
                <button className="carousel-arrow right" onClick={goToNext} aria-label="Next image">
                    <span aria-hidden="true">&#10095;</span>
                </button>
                <div className="carousel-dots">
                    {project.imageUrls.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to image ${index + 1}`}
                        ></button>
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
    const { currentIndex, goToNext, goToPrevious } = useCarousel(projects.length);

    return (
        <section id="two" className="wrapper style2">
            <div className="container">
                <header className="major">
                    <h2>Featured Projects</h2>
                </header>
                <div className="features-slider">
                    <button className="slider-arrow left" onClick={goToPrevious} aria-label="Previous project">
                        &#10094;
                    </button>
                    <ProjectCard project={projects[currentIndex]} />
                    <button className="slider-arrow right" onClick={goToNext} aria-label="Next project">
                        &#10095;
                    </button>
                </div>
                <ul className="actions major">
                    <li><a href="#three" className="button" onClick={onButtonClick}>Get In Touch</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
