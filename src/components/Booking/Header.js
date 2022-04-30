import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../Home/Hero/constants';
import Navbar from '../Home/Hero/Navbar';

function NavItem({ data }) {
  const { link, label, iconClass } = data;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `nav-btn ${isActive ? 'nav-btn-active' : ''}`
      }
    >
      <a>
        <i className={iconClass}></i>
        <p>{label}</p>
      </a>
    </NavLink>
  );
}

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
