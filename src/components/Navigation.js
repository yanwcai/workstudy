import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    console.log("On mouse enter");
    setDropdown(true);
    // if (window.innerWidth < 800) {
    //   setDropdown(false);
    // } else {
    //   setDropdown(true);
    //   console.log("Dropdown is set to true.");
    // }
  };

  const onMouseLeave = () => {
    console.log("On mouse leave");
    setDropdown(false);
    // if (window.innerWidth < 800) {
    //   setDropdown(false);
    // } else {
    //   setDropdown(false);
    // }
  };

  return (
    <>
      <nav className='navbar'>

        <ul>
        {/* <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className="nav-item">
            <Link
              to="/research"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Research <FontAwesomeIcon icon={faCaretDown} />
            </Link>
          </li>*/ }


          <li className='nav-item' 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
              About <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
        </ul> 
      </nav>
    </>
  );
}

export default Navigation;


// Reference: https://github.com/briancodex/react-navbar-dropdown/blob/master/src/components/Navbar.js