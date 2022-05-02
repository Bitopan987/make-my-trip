import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedFlight } from '../../redux/bookingSlice';
import Button from '../Common/Button';

import data from '../../data/data.json';

function FlightList() {
  let flights = data[0].flightData;

  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cityTo, cityFrom } = booking;

  const handleBooking = (flight) => {
    const bookingProgressData = {
      data: { ...booking, selectedFlight: flight },
      currentPage: 'flightList',
    };
    dispatch(setSelectedFlight(flight));
    navigate('/booking');
    localStorage.setItem(
      'bookingInProgress',
      JSON.stringify(bookingProgressData)
    );
  };

  return (
    <section className="flight-list">
      <h1 className="heading">
        Flights from {cityFrom.cityName} to {cityTo.cityName}
      </h1>
      <div className="flex flex-wrap justify-between align-center">
        {flights.map((flight) => {
          return (
            <article for={flight.operator} className="flight-content">
              <div className="flex justify-between align-center">
                <div className="flex align-center">
                  <img className="logo" alt="logo" src={flight.logo}></img>
                  <h2>{flight.operator}</h2>
                </div>
                <div>
                  <Button
                    title={'Book Now'}
                    onClick={() => handleBooking(flight)}
                    size={'small'}
                  />
                </div>
              </div>
              <div className="details flex justify-between align-center">
                <div>
                  <strong>{flight.time.departure}</strong>
                  <p>{cityFrom.cityName}</p>
                </div>
                <div>
                  <h6 className="border-green">{flight.duration}</h6>
                  <p>Non stop</p>
                </div>
                <div>
                  <strong>{flight.time.arrival}</strong>
                  <p>{cityTo.cityName}</p>
                </div>
                <h2 className="price">{flight.price}</h2>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FlightList;
