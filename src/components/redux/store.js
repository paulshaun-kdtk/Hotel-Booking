import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reservationReducer from './slices/reservationSlice';
import itemReducer from './slices/itemReducer';
import myReservationReducer from './slices/myReservationReducer';
import myHotelsReducer from './slices/hotelsReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer,
    item: itemReducer,
    myReservation: myReservationReducer,
    myHotels: myHotelsReducer,
    // other reducers if present
  },
  // other store configurations
});

export default store;
