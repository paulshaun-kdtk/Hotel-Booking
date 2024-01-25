// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reservationReducer from './slices/reservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer,
    // other reducers if present
  },
  // other store configurations
});

export default store;
