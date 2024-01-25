const initialState = {};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEM_DETAILS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default itemReducer;
