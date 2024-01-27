import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPageSidebar.css';

const AboutPageSidebar = () => {
  return (
    <nav className='side-navbar'>
      <ul className="sidebar-list">
        <div className='item-box'>
          <li className="sidebar-item" style={{display: 'inline-block'}}>
            <Link to="/about/people" className='item-link'>People</Link>
          </li>
        </div>

        <div className='item-box'>
          <li className="sidebar-item" style={{display: 'inline-block'}}>
            <Link to="/about/values" className='item-link'>Values</Link>
          </li>
        </div>

        <div className='item-box'>
          <li className="sidebar-item" style={{display: 'inline-block'}}>
            Faculty Publications
          </li>
        </div>

        <div className='item-box'>
          <li className="sidebar-item" style={{display: 'inline-block'}}>
            Corporate Programs
          </li>
        </div>

        <div className='item-box'>
          <li className="sidebar-item" style={{display: 'inline-block'}}>
            Get Involved
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default AboutPageSidebar;
// Reference: https://codesandbox.io/p/sandbox/react-vertical-menu-9sqfk?file=%2Fsrc%2Fcomponents%2FCustomNav.js%3A18%2C36