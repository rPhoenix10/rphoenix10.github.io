import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <ul className="icons">
                <li><a href="https://github.com/rPhoenix10" className="icon brands alt fa-github"><span className="label"></span></a></li>
                <li><a href="https://www.linkedin.com/in/kim-julius-sale-0722531a0/" className="icon brands alt fa-linkedin-in"><span className="label"></span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; {currentYear} Julius Sale</li>
            </ul>
        </footer>
    );
};

export default Footer;
