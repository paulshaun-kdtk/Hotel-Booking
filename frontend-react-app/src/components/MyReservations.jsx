import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchmyReservations from './redux/actions/myReservationActions';
import fetchItemDetails from './redux/actions/itemActions';
import Navbar from './Navbar';
import '../styles/myreservations.css';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const myReservations = useSelector((state) => state.myReservation);
  const items = useSelector((state) => state.items);

  // Local state to track loaded item details
  const [loadedItemDetails, setLoadedItemDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationsResponse = await dispatch(fetchmyReservations());

        if (reservationsResponse && reservationsResponse.data) {
          const itemIdsToFetch = reservationsResponse.data
            .filter((reservation) => reservation.item_id && !items[reservation.item_id])
            .map((reservation) => reservation.item_id);

          // Fetch item details for each item_id
          const fetchItemDetailsPromises = itemIdsToFetch.map(async (itemId) => {
            const response = await dispatch(fetchItemDetails(itemId));
            return response.data.item; // Assuming the structure of your API response
          });

          // Wait for all item details to be fetched
          const loadedDetails = await Promise.all(fetchItemDetailsPromises);

          // Update local state with loaded item details
          setLoadedItemDetails(loadedDetails);
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
