import Login from './Login';

function Header() {
  return (
    <header className="header-main">
      <div className="container header-content flex justify-between align-center">
        <div className="flex-50">
          <img
            className="header-img-1"
            src="./image/mmtLogoWhite.png"
            alt="yourpic"
          />
        </div>
        <div className="flex flex-60 align-center">
          <div className="header-col flex align-center">
            <div>
              <img
                className="header-img-2"
                src="./image/mybiz12345.png"
                alt="mybiz"
              />
            </div>
            <div>
              <h2 className="sub-header">Introducing myBiz</h2>
              <p className="header-text">MakeMyTrip for Business</p>
            </div>
          </div>
          <div className="header-col flex align-center">
            <div>
              <img
                src="./image/travellug123.png"
                alt="mybiz"
                className="header-img-3"
              />
            </div>
            <div>
              <h2 className="sub-header">MyTrips</h2>
              <p className="header-text">Manage your bookings</p>
            </div>
          </div>
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
