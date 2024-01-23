import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  setSelectedDate,
  setSelectedCity,
} from './redux/slices/reservationSlice';
import '../styles/ReservationPage.css';

const ReservationPage = ({
  username,
  userId,
  selectedItem,
  reservationSelectedDate,
  selectedCity,
  setSelectedDate,
  setSelectedCity,
}) => {
  const [localSelectedDate, setLocalSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/api/v1/items'); // Update the URL with your actual server URL
        console.log('Backend response:', response.data);

        if (response.status !== 200) {
          throw new Error(
            `Server returned ${response.status} - ${response.statusText}`
          );
        }

        setItemData(response.data.items);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDateChange = (date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const performSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const results = itemData.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseTerm)
    );
    setSearchResults(results);
  };

  const handleSearch = () => {
    performSearch();
  };

  const handleBookNow = async () => {
    try {
      const response = await axios.post('/api/v1/reservations', {
        user_id: userId,
        item_id: selectedItem.id,
        city: selectedCity,
        date: reservationSelectedDate.toISOString().split('T')[0],
      });
      const data = await response.json();
      console.log('Reservation details:', data);
    } catch (error) {
      console.error('Error during reservation:', error);
    }
  };

  return (
    <div className="reservation-page">
      {username}

      <div className="page-content">
        <div className="header">
          {/* Hamburger icon and Search icon */}
          <div
            className="hamburger-icon"
            onClick={toggleSidebar}
            onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
            role="button"
            tabIndex={0}
          >
            Menu
          </div>
          <div
            className="search-icon"
            onClick={handleSearch}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            role="button"
            tabIndex={0}
          >
            Find
          </div>
        </div>

        {showSidebar && (
          <div className="sidebar">
            {/* Sidebar links */}
            <a href="Homepage">Homepage</a>
            <a href="MyReservations">My reservations</a>
            <a href="AddItem">Add Hotel</a>
            <a href="DeleteItem">Delete Hotel</a>
            <button className="close-btn" onClick={toggleSidebar}>
              Close
            </button>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="search-results">
            {/* Display search results */}
            <p>Search Results:</p>
            {searchResults.map((result) => (
              <div key={result.id}>
                <h2 className="item-name">{result.name}</h2>
                <p className="item-description">{result.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="main">
          {Array.isArray(itemData) ? (
            itemData.map((item) => (
              <li key={item.id}>
                <h2 className="item-name">{item.name}</h2>
                <p className="item-description">{item.description}</p>
              </li>
            ))
          ) : (
            <p>Loading or No Data</p>
          )}

          <div className="clickable">
            <div className="choose-city">
              {/* City selection dropdown */}
              <select
                className="select-city"
                id="city"
                name="city"
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            <div className="date-picker">
              {/* Date input */}
              <input
                className="date-input"
                type="date"
                id="date"
                name="date"
                value={localSelectedDate.toISOString().split('T')[0]}
                onChange={(e) => handleDateChange(new Date(e.target.value))}
              />
            </div>

            {/* Book Now button */}
            <button className="button" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReservationPage.propTypes = {
  username: PropTypes.string,
  userId: PropTypes.string,
  selectedItem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  reservationSelectedDate: PropTypes.instanceOf(Date),
  selectedCity: PropTypes.string,
  setSelectedDate: PropTypes.func,
  setSelectedCity: PropTypes.func,
};

ReservationPage.defaultProps = {
  username: '',
  userId: '',
  selectedItem: null,
  reservationSelectedDate: null,
  selectedCity: '',
  setSelectedDate: () => {},
  setSelectedCity: () => {},
};

const mapStateToProps = (state) => ({
  reservationSelectedDate: state.reservation.selectedDate,
  selectedCity: state.reservation.selectedCity,
});

const mapDispatchToProps = {
  setSelectedDate,
  setSelectedCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPage);
