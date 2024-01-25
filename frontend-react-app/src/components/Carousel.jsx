import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };
  return (
    <>
      <div className="carousel-container">
        <BackButton onClick={prevSlide} />
        <div className="carousel-cards-container">
          {items.map((item, index) => (
            <div
              key={item.id} // Use unique identifier instead of index
              className="carousel-card"
              style={{ transform: `translateX(-${currentIndex * 87}%)` }}
            >
              <div className="carousel-card-inside">
                <img src={item.image} alt={item.name} />
                <h4 className="item-name">{item.name}</h4>
                <h5>{item.description}</h5>
                <ul className="carousel-icons">
                  <li>
                    <i className="fa-brands fa-twitter" />
                  </li>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <ForwardButton onClick={nextSlide} />
      </div>
    </>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};
export default Carousel;
