import React, { useState } from 'react';
import Navbar from './Navbar';
import ForwardButton from './ForwardButton';
import BackButton from './BackButton';


const Homepage = () => {

  return (
    <>
     <Navbar />
     
     <div className="homepage-container">
      <ForwardButton />
      <BackButton />
        <h1>Latest Hotels</h1>
        <p>Please select a hotel</p>
     </div>
    </>
  )
    
  
};

export default Homepage;
