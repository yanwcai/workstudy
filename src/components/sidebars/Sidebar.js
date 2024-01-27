import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const PageSidebar = ({ listItems }) => {
  return (
    <nav className='side-navbar'>
      <ul className="sidebar-list">
        {listItems.map((item, i) => (
          <div className='item-box'>
            <li className="sidebar-item" style={{display: 'inline-block'}}>
              <Link to={ item[1] } className='item-link'>{ item[0] }</Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default PageSidebar;
// Reference: https://codesandbox.io/p/sandbox/react-vertical-menu-9sqfk?file=%2Fsrc%2Fcomponents%2FCustomNav.js%3A18%2C36