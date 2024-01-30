import React, { useState } from 'react';
// eslint-disable-next-line import/extensions
import Navbar from './Navbar';
import Carousel from './Carousel';
import '../styles/Homepage.css';

const Homepage = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className="homepage-container">
        <h1>Latest Hotels</h1>
        <p>Please select a hotel</p>
        <span className={` ${isMenuOpen ? 'menu-open-padding' : 'menu-close-padding'}`}><Carousel /></span>
      </div>
    </>
  );
};
export default Homepage;
