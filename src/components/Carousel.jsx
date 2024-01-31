import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import fetchmyHotels from './redux/actions/fetchHotelsActions';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = useSelector((state) => state.myHotels.items);
  const currentUser = useSelector((state) => state.auth.user);
  console.log('currentuser', currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isDeletePage = location.pathname === '/deletehotel';

  useEffect(() => {
    dispatch(fetchmyHotels());
  }, [dispatch]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDelete = async (itemId) => {
    try {
      if (currentUser.email === 'admin@gmail.com') {
        const response = await axios.delete(`http://localhost:4000/api/v1/items/${itemId}`);
        dispatch(fetchmyHotels());
      } else {
        window.alert('You are not an authorized user to delete Hotels.');
      }
    } catch (error) {
      console.error('Error deleting hotel item:', error);
    }
  };

  return (
    <>
      <div className="carousel-container">
        <BackButton onClick={prevSlide} />
        <div className="carousel-cards-container">
          {(items && items.length === 0) || !items ? (
            <p>No hotels are added yet.</p>
          ) : (
            items && items.map((item) => (
              <div key={item.id} className="carousel-card" style={{ transform: `translateX(-${currentIndex * 87}%)`, flex: items.length === 1 ? '0 0 100%' : '0 0 50%' }}>
                <div className="carousel-card-inside">
                  <img src={item.image} alt={item.name} />
                  <h4>
                    <Link to={`/items/${item.id}`} className="item-name-c">
                      {item.name}
                    </Link>
                  </h4>
                  <h5>{item.description}</h5>
                  <ul className="carousel-icons">
                    <li><i className="fa-brands fa-twitter" /></li>
                    <li><i className="fa fa-facebook" /></li>
                  </ul>
                  {isDeletePage && (
                  <button className="delete-button bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                  )}
                </div>
              </div>
            )))}
        </div>
        <ForwardButton onClick={nextSlide} />
      </div>
    </>
  );
};

export default Carousel;
