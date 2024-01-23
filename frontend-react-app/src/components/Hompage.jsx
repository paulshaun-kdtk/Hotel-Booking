import React, { useState } from 'react';
import Navbar from './Navbar';


const Homepage = () => {

  return (
    <>
     <Navbar />
     <div className="homepage-container">
        <h1>Latest Hotels</h1>
        <p>Please select a hotel</p>
     </div>
    </>
  )
    
  
};

export default Homepage;
