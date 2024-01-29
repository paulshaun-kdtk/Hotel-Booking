import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import fetchmyReservations from './redux/actions/myReservationActions';
import fetchItemDetails from './redux/actions/itemActions';
import Navbar from './Navbar';
import '../styles/myreservations.css';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const myReservations = useSelector((state) => state.myReservation);
  const items = useSelector((state) => state.item);

  const [loadedItemDetails, setLoadedItemDetails] = useState([]);
  useEffect(() => {
    const fetchHotelItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setLoadedItemDetails(response.data.items);
      } catch (error) {
        console.error('Error fetching hotel items:', error);
      }
    };
    fetchHotelItems();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsResponse = await dispatch(fetchmyReservations());

        if (reservationsResponse && reservationsResponse.data) {
          const itemIdsToFetch = reservationsResponse.data
            .filter((reservation) => reservation.item_id && !items[reservation.item_id])
            .map((reservation) => reservation.item_id);

          const fetchItemDetailsPromises = itemIdsToFetch.map(async (itemId) => {
            const response = await dispatch(fetchItemDetails(itemId));
            return response.data.item;
          });
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchData();
  }, [dispatch, items]);

  const getItemName = (itemId) => {
    const loadedItem = loadedItemDetails.find((item) => item.id === itemId);
    return loadedItem?.name || 'Hotel Item';
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Navbar />
      <div className="my-main">
        <h2>Reservations List</h2>
        <table>
          <thead>
            <tr>
              <th className="table-head">Name</th>
              <th className="table-head">Date</th>
              <th className="table-head">City</th>
            </tr>
          </thead>
          <tbody>
            {myReservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{getItemName(reservation.item_id)}</td>
                <td>{reservation.date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationsList;
