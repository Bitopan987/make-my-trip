import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { OPTIONS } from './constants';
import CitySelect from './CitySelect';
import DateSelect from './DateSelect';
import 'react-datepicker/dist/react-datepicker.css';

function SearchFlight() {
  const [fromCity, setFromCity] = useState(null);
  const [selectingFromCity, setSelectingFromCity] = useState(false);
  const [selectingToCity, setSelectingToCity] = useState(false);
  const [toCity, setToCity] = useState(null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [departureDatePicking, setDepartureDatePicking] = useState(false);
  const [returnDatePicking, setReturnDatePicking] = useState(false);

  const onFromCityChange = (value) => {
    setSelectingFromCity(false);
    setFromCity(value);
  };

  const onToCityChange = (value) => {
    setSelectingToCity(false);
    setToCity(value);
  };

  const onDepartureDateChange = (date) => {
    setDepartureDate(date);
    setDepartureDatePicking(false);
  };

  const onReturnDateChange = (date) => {
    setReturnDate(date);
    setReturnDatePicking(false);
  };

  useEffect(() => {
    setFromCity(OPTIONS[0]);
    setToCity(OPTIONS[1]);
  }, []);

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
              />
              ONEWAY
            </label>
            <label className="label-1">
              <input
                type="radio"
                className="input-1"
                name="oneway"
                placeholder=""
                checked
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
        <div className="details flex align-center ">
          <CitySelect
            title="FROM"
            selectedCity={fromCity}
            selecting={selectingFromCity}
            setSelecting={setSelectingFromCity}
            onChange={onFromCityChange}
          />
          <CitySelect
            title="TO"
            selectedCity={toCity}
            selecting={selectingToCity}
            setSelecting={setSelectingToCity}
            onChange={onToCityChange}
          />
          <DateSelect
            title="DEPARTURE"
            date={departureDate}
            datePicking={departureDatePicking}
            setDatePicking={setDepartureDatePicking}
            onChange={onDepartureDateChange}
          />
          <DateSelect
            title="RETURN"
            date={returnDate}
            datePicking={returnDatePicking}
            setDatePicking={setReturnDatePicking}
            onChange={onReturnDateChange}
          />
          <div className="col flex-25">
            <h3>TRAVELLERS & CLASS</h3>
            <h2>
              1<span>Traveller</span>
            </h2>
            <p>Economy/Prtemium Economy</p>
            <strong>Group Booking Now Available!</strong>
          </div>
        </div>
        <footer className="flex justify-between align-center">
          <div>
            <form className="flex justify-between align-center">
              <h2>
                Select A <br /> FareType:
              </h2>
              <div className="flex align-center col-1">
                <input type="radio" name="fare" placeholder="" id="regualar" />
                <label for="fare">Redular Fares</label>
              </div>
              <div className="flex align-center col-1">
                <input type="radio" name="fare" placeholder="" id="fare" />
                <label for="fare">
                  Armed Forces Fare <span>NEW</span>
                </label>
              </div>
              <div className="flex align-center col-1">
                <input type="radio" name="fare" placeholder="" id="fare" />
                <label for="fare">Senior Citizen Fares</label>
              </div>
              <div className="flex align-center col-disable">
                <input
                  type="radio"
                  disabled
                  name="fare"
                  placeholder=""
                  id="fare"
                />
                <label>Double Seat Fares</label>
              </div>
            </form>
          </div>
          <div className="flex justify-between align-center recent">
            <h2>Recent Searches :</h2>
            <div className="wrapper">
              <h3>
                Delhi<i class="ri-arrow-left-right-line"></i> Bengaluru
              </h3>
              <p>29 Apr 22-30 Apr 22</p>
            </div>
            <div className="wrapper">
              <h3>
                Delhi<i class="ri-arrow-left-right-line"></i> Bengaluru
              </h3>
              <p>28 Apr 22</p>
            </div>
          </div>
        </footer>
        <div className="search-btn">
          <NavLink to="/flight">
            <button className="secondary-btn">SEARCH</button>
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
