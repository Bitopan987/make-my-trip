import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { formatDate } from '../../../utils/styleUtils';
import { setSelectedFlight } from '../../../redux/bookingSlice';
import UserForm from './UserForm';

function FlightDetails() {
  const { selectedFlight, cityTo, cityFrom, departureDate } = useSelector(
    (state) => state.booking
  );

  const dispatch = useDispatch();

  const bookingInProgress = JSON.parse(
    localStorage.getItem('bookingInProgress')
  );

  useEffect(() => {
    if (bookingInProgress) {
      dispatch(setSelectedFlight(bookingInProgress.data.selectedFlight));
    }
  }, []);

  return (
    <section className="details-section">
      <div className="flight-details">
        <div className="wrapper">
          <div className="flex justify-between ">
            <div>
              <h2 className="flex align-center">
                <span>{cityFrom.cityName}</span>{' '}
                <i class="ri-arrow-right-line"></i>{' '}
                <span>{cityTo.cityName}</span>
              </h2>
              <p className="padding">
                <span>{formatDate(departureDate)}</span> Non-Stop{' '}
                {selectedFlight.duration}
              </p>
              <div className="flex  align-center">
                <img
                  className="logo"
                  src={selectedFlight.logo}
                  alt={`${selectedFlight.operator} logo`}
                ></img>
                <strong>{selectedFlight.operator}</strong>
              </div>
            </div>
            <div>
              <h3 className="green">CANCELLATION FEES APPLY</h3>
              <h4 className="padding">View Fare Rules</h4>
              <p>
                Economy<span>SAVER</span>
              </p>
            </div>
          </div>
          <article className="ticket flex justify-between">
            <div className="flex">
              <div className="box">
                <h3>{selectedFlight.time?.departure}</h3>
                <h3>{selectedFlight.time?.arrival}</h3>
              </div>
              <div>
                <p>
                  <strong>{cityFrom.cityName} </strong>
                  {cityFrom.airportName}
                </p>
                <p className="totaltime">{selectedFlight.duration}</p>
                <p>
                  <strong>{cityTo.cityName} </strong>
                  {cityTo.airportName}
                </p>
              </div>
            </div>
            <div>
              <p>Baggage</p>
              <h3 className="padding">ADULT</h3>
            </div>
            <div>
              <p>Check-in</p>
              <h3 className="padding">15 kgs(1 piece)</h3>
            </div>
            <div>
              <p>Cabin</p>
              <h3 className="padding">7 Kgs(1 piece)</h3>
            </div>
          </article>
        </div>
        <div className="add flex justify-between">
          <p className="flex ">
            <i class="ri-gift-fill red"></i>
            Get excess luggage? Don't stress buy extra check-in luggage
          </p>
          <div>
            <a href="/" className="flex">
              <i class="ri-add-fill blue"></i>
              <span className="blue">Add</span>
            </a>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="header flex justify-between ">
          <div className="flex align-center">
            <div className="flex align-center">
              <i class="ri-profile-fill"></i>
              <span>ADULT(12yrs)</span>
            </div>
            <p className="red">PLease select/add 1 ADULT</p>
          </div>
          <h2>
            <span>0/1</span>added
          </h2>
        </div>

        <div className="input-wrapper">
          <p>You have not added any adults to the list</p>
          <button className="btn-add">+ ADD NEW ADULT</button>
        </div>
        <UserForm />
      </div>
    </section>
  );
}

export default FlightDetails;
