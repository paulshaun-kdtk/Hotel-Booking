import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const [isNavbarOpen, setNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <div
        className={`menu-icon ${isNavbarOpen ? 'active' : ''}`}
        onClick={toggleNavbar}
      >
        ☰
      </div>

      <div className={`navbar-container ${isNavbarOpen ? 'open' : ''}`}>
          <ul className='nav-list-container'>
            <li className={isActive('/homepage') ? 'active' : ''}><Link to="/homepage">HomePage</Link></li>
            <li className={isActive('/reservation') ? 'active' : ''}><Link to="/reservation">Reserve Hotel</Link></li>
            <li className={isActive('/myreservations') ? 'active' : ''}><Link to="/myreservations">My Reservations</Link></li>
            <li className={isActive('/addhotel') ? 'active' : ''}><Link to="/addhotel">Add Hotel</Link></li>
            <li className={isActive('/deletehotel') ? 'active' : ''}><Link to="/deletehotel">Delete Hotel</Link></li>
          </ul>
          <ul className='icons-container'>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className='fa fa-facebook'></i></li>
            <li><i className="fab fa-google-plus-g"></i></li>
            <li><i className="fa-brands fa-vimeo-v"></i></li>
            <li><i className="fa-brands fa-paypal"></i></li>
          </ul>
          <ul className='footer-container'>
            <li>&copy; 2024, All rights reserved</li>
          </ul>
      </div>
    </div>
  );
  
};

export default Navbar;
