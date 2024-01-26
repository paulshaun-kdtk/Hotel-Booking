const initialState = [];

const myReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_SUCCESS':
      return action.payload || [];
    default:
      return state;
  }
};

export default myReservationReducer;
