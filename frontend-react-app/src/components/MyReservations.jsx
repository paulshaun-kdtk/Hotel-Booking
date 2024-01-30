import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import fetchmyReservations from './redux/actions/myReservationActions';
import fetchmyHotels from './redux/actions/fetchHotelsActions';
import Navbar from './Navbar';
import '../styles/myreservations.css';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const myReservations = useSelector((state) => state.myReservation);
  console.log('myReservations', myReservations);
  const myHotels = useSelector((state) => state.myHotels.items);

  useEffect(() => {
    dispatch(fetchmyHotels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchmyReservations());
  }, [dispatch]);

  const handleDelete = async (reservationId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/v1/reservations/${reservationId}`);
      dispatch(fetchmyReservations());
    } catch (error) {
      console.error('Error deleting hotel item:', error);
    }
  };

  const getItemName = (itemId) => {
    const loadedItem = myHotels && myHotels.find((item) => item.id === itemId);
    return loadedItem?.name || 'Hotel Item';
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Navbar />
      <div className="my-main">
        <h2>Reservations List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4 lg:px-6 border-b bg-gray-200">Name</th>
                <th className="py-2 px-2 md:px-4 lg:px-6 border-b bg-gray-200">Date</th>
                <th className="py-2 px-2 md:px-4 lg:px-6 border-b bg-gray-200">City</th>
                <th className="py-2 px-2 md:px-4 lg:px-6 border-b bg-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {myReservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-100 transition-colors">
                  <td className="py-2 px-2 md:px-4 lg:px-6 border-b">{getItemName(reservation.item_id)}</td>
                  <td className="py-2 px-2 md:px-4 lg:px-6 border-b">{reservation.date}</td>
                  <td className="py-2 px-2 md:px-4 lg:px-6 border-b">{reservation.city}</td>
                  <td className="py-2 px-2 md:px-4 lg:px-6 border-b">
                    <button className="unreserve-btn hover:bg-red-500 text-white px-2 py-1 rounded sm:px-3 sm:py-1 md:px-4 md:py-1 lg:px-6 lg:py-1" onClick={() => handleDelete(reservation.id)}>
                      UnReserve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ReservationsList;
