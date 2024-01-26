import React, {
  useEffect, useState,
} from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInForm from './components/signin';
import SignUpForm from './components/signup';
import Homepage from './components/Hompage';
import ReservationPage from './components/ReservationPage';
import MyReservations from './components/MyReservations';
import ItemDetails from './components/ItemDetails';
import AdditemForm from './components/AdditemForm';
import DeleteHotel from './components/DeleteHotel';
import Splash from './components/splash';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
  }, [isAuthenticated]);
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
              <Route path="/addhotel" element={<AdditemForm />} />
              <Route path="/deletehotel" element={<DeleteHotel />} />
              <Route path="/*" element={<Navigate to="/homepage" />} />
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
