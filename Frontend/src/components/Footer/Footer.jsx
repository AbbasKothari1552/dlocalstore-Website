// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Company name</h2>
      <p>Let's connect</p>
      <div className="social-icons">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="icon"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
