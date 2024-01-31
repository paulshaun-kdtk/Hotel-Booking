import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addDays, format } from 'date-fns';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import fetchItemDetails from './redux/actions/itemActions';
import fetchmyHotels from './redux/actions/fetchHotelsActions';
import { createReservation, setSelectedDate, setSelectedCity } from './redux/actions/reservationActions';
import Navbar from './Navbar';
import '../styles/reservation.css';

const ReservationPage = ({
  userId,
  setSelectedDate,
  setSelectedCity,
}) => {
  const hotels = useSelector((state) => state.myHotels.items);
  const [hotelItems, setHotelItems] = useState([]);
  console.log('hotelitems', hotelItems);
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const tomorrowDate = format(addDays(new Date(), 1), 'yyyy-MM-dd');
  const navigate = useNavigate();
  const { itemId } = useParams();
  const item = useSelector((state) => state.item);
  console.log('item', item);
  const [hotelId, setHotelId] = useState('');
  const [reservationData, setReservationData] = useState({
    date: '',
    city: '',
  });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchmyHotels());
  }, [dispatch]);

  useEffect(() => {
    console.log('hotels from Redux:', hotels);
    setHotelItems(hotels);
  }, [hotels]);

  useEffect(() => {
    console.log('itemId', itemId);
    dispatch(fetchItemDetails(itemId));
  }, [dispatch, itemId]);

  const handleInputChange = (updatedData) => {
    setReservationData({
      ...reservationData,
      ...updatedData,
    });
  };

  const handleReservationSubmit = () => {
    dispatch(
      createReservation({
        ...reservationData,
        user_id: currentUser.id,
        item_id: item.id || hotelId,
      }),
    );
    navigate('/myreservations');
  };

  return (
    <div className="reservation-page">
      <div className="page-content">
        <div className="header">
          <Navbar />
          <div className="searchbar-input-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-icon"
            />
          </div>
        </div>

        <div className="main">
          {item.id ? (
            <li key={item.id}>
              <h2 className="item-name">{item.name}</h2>
              <p className="item-description">{item.description}</p>
            </li>
          ) : (
            <div className="choose-hotel">
              <select
                className="select-hotel"
                id={item?.id || ''}
                name={item?.name || ''}
                value={reservationData.hotel ? reservationData.hotel.id.toString() : ''}
                onChange={(e) => {
                  const selectedHotel = hotelItems.find((hotel) => hotel.id.toString() === e.target.value);
                  setHotelId(selectedHotel.id);
                  handleInputChange({ hotel: selectedHotel });
                }}
              >
                <option value="" disabled>Select Hotel</option>
                {hotelItems && hotelItems.map((hotel) => (
                  <option value={hotel.id.toString()} key={hotel.id}>
                    {hotel.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="clickable">
            <div className="choose-city">
              <select
                className="select-city"
                id="city"
                name="city"
                value={reservationData.city}
                onChange={(e) => handleInputChange({ city: e.target.value })}
              >
                <option value="" disabled>Select a City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            <div className="date-picker">
              <input
                className="date-input"
                type="date"
                id="date"
                name="date"
                value={reservationData.date}
                onChange={(e) => handleInputChange({ date: e.target.value })}
                min={tomorrowDate}
              />
            </div>

            <button className="button" onClick={handleReservationSubmit}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReservationPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  userId: PropTypes.string,
  setSelectedDate: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
};

ReservationPage.defaultProps = {
  userId: '',
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
