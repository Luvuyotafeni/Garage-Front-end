import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open and close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  return (
    <div>
      <nav className="header">
        {/* Hamburger Icon - visible only on smaller screens */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>Blog</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/vehicles" onClick={toggleMenu}>Vehicles</Link>
            </li>
            <li>
              <Link to="/parts" onClick={toggleMenu}>Parts</Link>
            </li>
            <li>
              <Link to="/careers" onClick={toggleMenu}>Careers</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
