import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import FlightBooking from './components/Booking';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<FlightBooking />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
