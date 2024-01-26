import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Logout from './logout';

const Navbar = () => {
  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };
  return (
    <div>
      <button
        className={`menu-icon ${isNavbarOpen ? 'active' : ''}`}
        onClick={toggleNavbar}

      >
        ☰
      </button>
      <div className={`navbar-container ${isNavbarOpen ? 'open' : ''}`}>
        <ul className="nav-list-container">
          <li className={isActive('/homepage') ? 'active' : ''}><Link to="/homepage">HomePage</Link></li>
          <li className={isActive('/reservation') ? 'active' : ''}><Link to="/reservation">Reserve Hotel</Link></li>
          <li className={isActive('/myreservations') ? 'active' : ''}><Link to="/myreservations">My Reservations</Link></li>
          <li className={isActive('/addhotel') ? 'active' : ''}><Link to="/addhotel">Add Hotel</Link></li>
          <li className={isActive('/deletehotel') ? 'active' : ''}><Link to="/deletehotel">Delete Hotel</Link></li>
          <li><Logout /></li>
        </ul>
        <ul className="icons-container">
          <li><i className="fa-brands fa-twitter" /></li>
          <li><i className="fa fa-facebook" /></li>
          <li><i className="fab fa-google-plus-g" /></li>
          <li><i className="fa-brands fa-vimeo-v" /></li>
          <li><i className="fa-brands fa-paypal" /></li>
        </ul>
        <ul className="footer-container">
          <li>&copy; 2024, All rights reserved</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
