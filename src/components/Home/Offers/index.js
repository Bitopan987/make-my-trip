import { NavLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DownloadApp from './DownloadApp';

function Offers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="offer">
        <div className="container">
          <div className="flex justify-between align-center">
            <div className="nav flex align-center">
              <h2>Offers</h2>
              <div className="links flex justify-between align-center">
                <NavLink to="/">
                  <h3 id="active-btn"> ALL OFFERS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3>BANK OFFERS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3>FLIGHTS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3>HOTELS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3>HOLIDAYS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3>TRAINS</h3>
                </NavLink>
                <NavLink to="/">
                  <h3 className="flex">
                    <strong>MORE</strong>
                    <i class="ri-arrow-down-s-line"></i>
                  </h3>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex">
            <Carousel responsive={responsive}>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:MMT</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:MMT</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:MMC</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:MNC</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:DFR</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
              <article className="offer-card flex ">
                <div>
                  <img src="https://promos.makemytrip.com/notification/xhdpi//desktop-Ama-Stays-Sale-280422.jpg"></img>
                  <p>T&C's Apply</p>
                </div>
                <div>
                  <h3>In Flights</h3>
                  <h2>
                    <span>#Festive</span> Offer
                  </h2>
                  <h4>FLAT 12% OFF on Domestic Flights</h4>
                  <div className="btn-wrapper flex justify-between align-center">
                    <h5>Code:ANC</h5>
                    <button>View Details</button>
                  </div>
                </div>
              </article>
            </Carousel>
          </div>
        </div>
      </section>
      <DownloadApp />
    </>
  );
}

export default Offers;
