import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/map" className="nav-links">Map</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
        </ul>
        <a href="https://github.com/Fridish/Charging-Stations" target="_blank" rel="noopener noreferrer" className="icon-button">
          <img src="public\github.svg" alt="GitHub" className="icon"/>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
