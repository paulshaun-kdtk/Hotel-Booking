const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION_SUCCESS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reservationReducer;
