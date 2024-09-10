import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(isMenuOpen);
  };
  return (
    <div>
        <nav className="header">
          <div className={`nav-links ${isMenuOpen ? 'open': ''}`}>
            <div className='close-icon' onClick={toggleMenu}>
              <i className='bx bx-x'></i>
            </div>
            <ul >
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
                <li>
                <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                <Link to="/vehicles"> Vehicles</Link>
                </li>
                <li>
                <Link to="/parts">Parts</Link> 
                </li>
                <li>
                <Link to="/careers">Careers</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
          </div>
          <div className='hamburger' onClick={toggleMenu}> 
            <i className={`bx ${isMenuOpen ? 'bx-x': 'bx-menu'}`}></i>
          </div>
        </nav>
    </div>
  )
}

export default Header