import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchmyReservations from './redux/actions/myReservationActions';
import Navbar from './Navbar';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const myReservations = useSelector((state) => state.myReservation);

  useEffect(() => {
    dispatch(fetchmyReservations());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Navbar />
      <h2>Reservations List</h2>
      {myReservations ? (
        <ul>
          {myReservations.map((reservation) => (
            <li key={reservation.id}>
              <p>
                ID:
                {reservation.id}
              </p>
              <p>
                Date:
                {reservation.date}
              </p>
              <p>
                City:
                {reservation.city}
              </p>
              <p>
                Name:
                {/* {reservation.item.name} */}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReservationsList;
