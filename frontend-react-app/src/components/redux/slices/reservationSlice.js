import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    selectedDate: new Date().getTime(),
    selectedCity: '',
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = new Date(action.payload);
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});
export const { setSelectedDate, setSelectedCity } = reservationSlice.actions;
export default reservationSlice.reducer;
