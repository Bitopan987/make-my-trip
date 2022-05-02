import { NavLink } from 'react-router-dom';
import CitySelect from './CitySelect';
import DateSelect from './DateSelect';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import FareType from './FareType';
import {
  setCityFrom,
  setDepartureDate,
  setCityTo,
  setReturnDate,
} from '../../../../redux/bookingSlice';

function SearchFlight() {
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const { cityFrom, cityTo, departureDate, returnDate, passengerCount } =
    booking;

  const onSearchClick = () => {
    localStorage.setItem(
      'bookingInProgress',
      JSON.stringify({ data: booking, currentPage: 'flightList' })
    );
  };
  return (
    <>
      <section className="booking ">
        <header className="flex justify-between align-center ">
          <form>
            <label className="label-1">
              <input
                type="radio"
                className="input-1"
                name="oneway"
                placeholder=""
                checked
              />
              ONEWAY
            </label>
            <label className="label-1">
              <input
                type="radio"
                className="input-1"
                name="oneway"
                placeholder=""
              />
              ROUNDTRIP
            </label>
            <label className="label-1">
              <input
                type="radio"
                className="input-1"
                name="oneway"
                placeholder=""
              />
              MULTICITY
            </label>
          </form>
          <h2 className="text">Book International and Domestic Flights</h2>
        </header>
        <div className="details flex relative">
          <CitySelect
            title="FROM"
            selectedCity={cityFrom}
            onChange={(value) => dispatch(setCityFrom(value))}
          />
          <CitySelect
            title="TO"
            selectedCity={cityTo}
            onChange={(value) => dispatch(setCityTo(value))}
          />
          <DateSelect
            title="DEPARTURE"
            date={departureDate}
            onChange={(value) => dispatch(setDepartureDate(value))}
          />
          <DateSelect
            title="RETURN"
            date={returnDate}
            onChange={(value) => dispatch(setReturnDate(value))}
          />
          <div className="col flex-25 cursor-pointer">
            <h3>TRAVELLERS & CLASS</h3>
            <h2>
              {passengerCount} <span>Traveller</span>
            </h2>
            <p>Economy/Prtemium Economy</p>
            <strong>Group Booking Now Available!</strong>
          </div>
        </div>
        <FareType />
        <div className="search-btn">
          <NavLink to="/flight" onClick={() => onSearchClick()}>
            <Button title={'SEARCH'} />
          </NavLink>
          <div>
            <NavLink to="/" className="explore">
              <i class="ri-arrow-down-s-line"></i>Explore More
              <i class="ri-arrow-down-s-line"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchFlight;
