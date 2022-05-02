import Login from './Login';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-main">
      <div className="container header-content flex justify-between align-center">
        <div className="flex-50">
          <Link to="/">
            <img
              className="header-img-1"
              src="./image/mmtLogoWhite.png"
              alt="yourpic"
            />
          </Link>
        </div>
        <div className="flex flex-60 align-center flex-end">
          <div className="header-col flex align-center">
            <div>
              <img
                className="header-img-2"
                src="./image/mybiz12345.png"
                alt="mybiz"
              />
            </div>
            <div>
              <h2 className="sub-header"> myBiz</h2>
              <p className="header-text"> Business</p>
            </div>
          </div>
          <Link to="my-trips" className="header-col flex align-center">
            <i className="ri-suitcase-2-fill"></i>
            <div>
              <h2 className="sub-header">MyTrips</h2>
              <p className="header-text">Bookings</p>
            </div>
          </Link>
          <div>
            <Login />
          </div>
          <div>
            <img
              src="./image/conversion.png"
              className="header-img-4"
              alt="none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
