// src/components/Header.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">dLocalStore</div>
      <nav className="nav">
        <a href="#login">Login</a>
        <a href="#login">Register</a>
      </nav>
    </header>
  );
};

export default Navbar;
