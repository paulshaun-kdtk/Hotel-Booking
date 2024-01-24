import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/signin';
import SignUpForm from './components/signup';
import Homepage from './components/Hompage';
import Splash from './components/splash';
import ReservationPage from './components/ReservationPage';
import ItemDetails from './components/ItemDetails';
import MyReservations from './components/MyReservations';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/items/:itemId" element={<ItemDetails />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/*" element={<Splash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
