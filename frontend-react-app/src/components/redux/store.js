import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reservationReducer from './slices/reservationSlice';
import itemReducer from './slices/itemReducer';
import myReservationReducer from './slices/myReservationReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer,
    item: itemReducer,
    myReservation: myReservationReducer,
    // other reducers if present
  },
  // other store configurations
});

export default store;
