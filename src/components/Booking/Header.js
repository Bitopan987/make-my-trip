function Header() {
  return (
    <header className="booking-header">
      <div className="container flex justify-between">
        <div className="flex">
          <div>
            <img className="logo" src="./image/mmt.png" alt="yourpic" />
          </div>
          <nav>
            <ul className="flex links align-center">
              <li>
                <a href="#">
                  <img alt="aero1.png" src="./image/aeroplane.png"></img>
                  <p>Flights</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="hotel.png" src="./image/hotels111.png"></img>
                  <p>Hotels</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="villas.png" src="./image/villas111.png"></img>
                  <p>Homestays</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    alt="holiday.png"
                    src="./image/holidaypackages111.png"
                  ></img>
                  <p>Holiday Packages</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./image/train111.png"></img>
                  <p>Trains</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="bus.png" src="./image/bus111.png"></img>
                  <p>Buses</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="cab.png" src="./image/cabs111.png"></img>
                  <p>Cabs</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="visa.png" src="./image/visa111.png"></img>
                  <p>Visa</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img alt="aero.png" src="./image/aeroplane111.png"></img>
                  <p>Charter Flights</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex align-center">
          <div className="login-bar flex align-center">
            <div>
              <img src="./image/nature2.jpg"></img>
            </div>
            <div>
              <p>
                {' '}
                <a href="/">Login </a>or
              </p>
              <p>
                {' '}
                <a href="/">Create Account</a>
              </p>
            </div>
          </div>
          <div className="country ">
            <div>
              <p>Country</p>
              <p className="flex">
                India<i class="ri-arrow-down-s-line"></i>
              </p>
            </div>
          </div>
          <div className="language ">
            <div>
              <p>Language</p>
              <p className="flex">
                ENG<i class="ri-arrow-down-s-line"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
