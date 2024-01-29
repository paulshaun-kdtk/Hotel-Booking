import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from './components/redux/slices/authSlice';
import SignInForm from './components/signin';
import SignUpForm from './components/signup';
import Homepage from './components/Hompage';
import ReservationPage from './components/ReservationPage';
import MyReservations from './components/MyReservations';
import ItemDetails from './components/ItemDetails';
import AddItemForm from './components/AddItemForm';
import DeleteHotel from './components/DeleteHotel';

import Splash from './components/splash';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log('appauthentication', isAuthenticated);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    console.log('appuser', user);
    if (token && user) {
      dispatch(loginSuccess({ user, token }));
    }
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/*" element={<Navigate to="/homepage" />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/myreservations" element={<MyReservations />} />
              <Route path="/items/:itemId" element={<ItemDetails />} />
              <Route path="/addhotel" element={<AddItemForm />} />
              <Route path="/deletehotel" element={<DeleteHotel />} />
              {/* <Route path="/*" element={<Navigate to="/homepage" />} /> */}
            </>
          ) : (
            <>
              <Route path="/login" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/*" element={<Splash />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
