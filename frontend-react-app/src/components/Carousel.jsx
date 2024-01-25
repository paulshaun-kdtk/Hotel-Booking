import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isDeletePage = location.pathname === '/deletehotel';

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/v1/items/${itemId}`);
      console.log('Item deleted successfully:', response.data);
      window.alert('Hotel item deleted successfully');
      navigate('/homepage');
    } catch (error) {
      console.error('Error deleting hotel item:', error);
    }
  };

  return (
    <>
    <div className="carousel-container">
    <BackButton onClick={prevSlide} />
    <div className="carousel-cards-container" >
        {items.map((item, index) => (
          <div key={index} className="carousel-card" style={{ transform: `translateX(-${currentIndex * 87}%)`, flex: items.length === 1 ? '0 0 100%' : '0 0 50%' }}>
            <div className='carousel-card-inside'>
                <img src={item.image} alt={item.name} />
                <h4 className='item-name'>{item.name}</h4>
                <h5>{item.description}</h5>
                <ul className='carousel-icons'>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className='fa fa-facebook'></i></li>
                </ul>
                {isDeletePage && (
                  <button className="delete-button bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                )}
            </div>
          </div>
        ))}
    </div>
    <ForwardButton onClick={nextSlide}  />
    </div>
    
    </>
  );
};

export default Carousel;
