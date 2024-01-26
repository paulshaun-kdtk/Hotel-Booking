import React, { useEffect } from 'react';
import { Router,Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInForm from './components/signin';
import SignUpForm from './components/signup';
import Homepage from './components/Hompage';
import ReservationPage from './components/ReservationPage';
import ItemDetails from './components/ItemDetails';
import AdditemForm from './components/AddItemForm';
import DeleteHotel from './components/DeleteHotel';
import Splash from './components/splash';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Any side effects related to isAuthenticated can be handled here
  }, [isAuthenticated]);

  return (
    <Router>
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/*" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/items/:itemId" element={<ItemDetails />} />
          <Route path="/addhotel" element={<AdditemForm />} />
          <Route path="/deletehotel" element={<DeleteHotel />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/*" element={<Splash />} />
        </>
      )}
    </Routes>
    </Router>
  );
};

export default App;
