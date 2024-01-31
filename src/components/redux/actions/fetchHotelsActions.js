import axios from 'axios';

const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';

const fetchHotelsSuccess = (myHotels) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: myHotels,
});

const fetchmyHotels = () => (dispatch) => {
  axios.get('http://localhost:4000/api/v1/items')
    .then((response) => {
      dispatch(fetchHotelsSuccess(response.data));
    })
    .catch((error) => {
      console.error('Error during fetching Hotels:', error);
    });
};

export default fetchmyHotels;
