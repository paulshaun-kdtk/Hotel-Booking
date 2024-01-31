const initialState = [];

const myHotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HOTELS_SUCCESS':
      return action.payload || [];
    default:
      return state;
  }
};

export default myHotelsReducer;
