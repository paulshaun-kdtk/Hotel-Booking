// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reservationReducer from './slices/reservationSlice';
import itemReducer from './slices/itemReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer,
    item: itemReducer,
    // other reducers if present
  },
  // other store configurations
});

export default store;
