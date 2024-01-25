import axios from 'axios';

const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';

const fetchReservationsSuccess = (reservations) => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: reservations,
});

const fetchReservations = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:4000/api/v1/reservations')
    .then((response) => {
      dispatch(fetchReservationsSuccess(response.data));
    })
    .catch((error) => {
      console.error('Error during reservation:', error);
    });
};

export default fetchReservations;
