import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchReservations from './redux/actions/reservationActions';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h2>Reservations List</h2>
      {reservations ? (
        <ul>
          {reservations.map((reservation) => (
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
                {reservation.item.name}
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
