// src/components/Header.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onRegisterClick , onLoginClick }) => {
  return (
    <header className="header">
      <div className="logo">dLocalStore</div>
      <nav className="nav">
      <button onClick={onLoginClick} className="nav-button">Login</button>
        <button onClick={onRegisterClick} className="nav-button">Register</button>
      </nav>
    </header>
  );
};

export default Navbar;
