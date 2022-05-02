import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setCityFrom,
  setDepartureDate,
  setCityTo,
  setReturnDate,
} from './redux/bookingSlice';
import NoMatch from './components/Common/NoMatch';
import Home from './components/Home';
import FlightBooking from './components/Booking';
import BookingDetails from './components/Booking/BookingDetails';
import 'remixicon/fonts/remixicon.css';

function App() {
  const bookingInProgress = JSON.parse(
    localStorage.getItem('bookingInProgress')
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(bookingInProgress, 'dgd');
    if (bookingInProgress) {
      const { cityFrom, cityTo, departureDate, returnDate } =
        bookingInProgress.data;
      dispatch(setCityFrom(cityFrom));
      dispatch(setCityTo(cityTo));
      dispatch(setDepartureDate(new Date(departureDate)));
      dispatch(setReturnDate(new Date(returnDate)));
    }
  }, [bookingInProgress]);

  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingDetails />} />
        <Route path="/flight" element={<FlightBooking />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
