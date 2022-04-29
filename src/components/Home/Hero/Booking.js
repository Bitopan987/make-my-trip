import { NavLink } from 'react-router-dom';

function Booking() {
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
          <div className="col flex-25">
            <h3>FROM</h3>
            <h2>Delhi</h2>
            <p>DEL, Delhi Airport India</p>
          </div>
          <div className="col flex-25">
            <h3>To</h3>
            <h2>Bengaluru</h2>
            <p>BLR,Bengaluru International</p>
          </div>
          <div className="col flex-15">
            <h3>DEPARTURE</h3>
            <h2>
              29<span>Apr'22</span>
            </h2>
            <p>Friday</p>
          </div>
          <div className="col flex-15">
            <div>
              <h3>RETURN</h3>
            </div>
            <h2>
              30<span>Apr'22</span>
            </h2>
            <p>Saturday</p>
          </div>
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
          <div className="flex-50">
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
                <label for="fare">Student Fares</label>
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

export default Booking;
