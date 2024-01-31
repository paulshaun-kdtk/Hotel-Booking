import axios from 'axios';

const FETCH_ITEM_DETAILS_SUCCESS = 'FETCH_ITEM_DETAILS_SUCCESS';

const fetchItemDetailsSuccess = (item) => ({
  type: FETCH_ITEM_DETAILS_SUCCESS,
  payload: item,
});

const fetchItemDetails = (itemId) => (dispatch) => {
  axios
    .get(` https://hotel-booking-app-r0mb.onrender.com/api/v1/items/${itemId}`)
    .then((response) => {
      dispatch(fetchItemDetailsSuccess(response.data.item));
    })
    .catch((error) => {
      console.error('Error during item details fetching:', error);
    });
};

export default fetchItemDetails;