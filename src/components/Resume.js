import React from 'react';
import './Resume.css';
import { links } from '../portfolioData';

const Resume = ({ onClose }) => {
  return (
    <div className="resume-overlay" onClick={onClose}>
      <article className="resume-article" onClick={(e) => e.stopPropagation()}>
        <div className="resume-header">
          <h2 className = "resume-title">RESUME</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
         
        <embed
          src={links.resumePDF}
          type="application/pdf"
          className="resume-embed"
        />
      </article>
    </div>
  );
};

export default Resume;
