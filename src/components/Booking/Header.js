import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Navbar from '../Home/Hero/Navbar';

function Header() {
  return (
    <header className="booking-header">
      <div className="container flex justify-between">
        <div className="flex space-around">
          <Link to="/">
            <img className="logo" src="./image/mmt.png" alt="yourpic" />
          </Link>
          <Navbar path="/flight" />
        </div>
        <div className="flex align-center">
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
