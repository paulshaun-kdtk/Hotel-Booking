import axios from 'axios';

const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';

const fetchReservationsSuccess = (myReservations) => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: myReservations,
});

const fetchmyReservations = () => (dispatch) => {
  axios.get(' https://hotel-booking-app-r0mb.onrender.com/api/v1/reservations')
    .then((response) => {
      dispatch(fetchReservationsSuccess(response.data));
    })
    .catch((error) => {
      console.error('Error during reservation:', error);
    });
};

export default fetchmyReservations;
