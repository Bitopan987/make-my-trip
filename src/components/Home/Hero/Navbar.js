import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from './constants';

function NavItem({ data, size }) {
  const { link, label, iconClass } = data;

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `nav-btn ${size === 'small' && 'nav-btn-small'} ${
          isActive ? 'nav-btn-active' : ''
        }`
      }
    >
      <a>
        <i className={iconClass}></i>
        <p>{label}</p>
      </a>
    </NavLink>
  );
}

function Navbar({ path = '/' }) {
  const isHomePage = path === '/';
  const links = !isHomePage
    ? NAV_LINKS.map((value) =>
        value.label === 'Flights' ? { ...value, link: path } : value
      )
    : NAV_LINKS;

  return (
    <section className={`navbar ${isHomePage && 'navbar-center'}`}>
      <nav>
        <div className="flex space-around align-center">
          {links.map((linkData) => (
            <NavItem data={linkData} size={isHomePage ? 'large' : 'small'} />
          ))}
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
