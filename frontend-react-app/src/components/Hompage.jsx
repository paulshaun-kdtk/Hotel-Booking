import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logout from './logout';
import Navbar from './Navbar';
import Carousel from './Carousel';


const Homepage = () => {

  const [hotelItems, setHotelItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHotelItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setHotelItems(response.data.items);
      } catch (error) {
        console.error('Error fetching hotel items:', error);
      }
    };

    fetchHotelItems();
  }, []);

  console.log(hotelItems)

  return (
    <>
     <Navbar />
     
     <div className="homepage-container">
        <Logout/>
        <h1>Latest Hotels</h1>
        <p>Please select a hotel</p>

        <Carousel items={hotelItems} />
     </div>
    </>
  )
    
  
};

export default Homepage;
