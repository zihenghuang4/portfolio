import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ziheng Huang</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Ziheng Huang. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;