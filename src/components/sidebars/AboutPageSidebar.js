import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPageSidebar.css';

const Sidebar = () => {
  return (
    <div className="side-navbar">
      <div className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/services" className="nav-link">Services</Link>
      </div>
    </div>
  );
};

export default Sidebar;
