import axios from 'axios';

export const createReservation = (reservationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/v1/reservations',
      { reservation: reservationData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    dispatch({
      type: 'CREATE_RESERVATION_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
      dispatch({
        type: 'CREATE_RESERVATION_FAILURE',
        payload: error.response.data,
      });
    } else {
      console.error('Unexpected Error:', error.message);
      dispatch({
        type: 'CREATE_RESERVATION_FAILURE',
        payload: 'An unexpected error occurred.',
      });
    }
  }
};

export const setSelectedDate = (date) => ({
  type: 'SET_SELECTED_DATE',
  payload: date,
});

export const setSelectedCity = (city) => ({
  type: 'SET_SELECTED_CITY',
  payload: city,
});
