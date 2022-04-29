import GuideLines from './GuideLines';

function Explore() {
  return (
    <>
      <section className="explore-container">
        <ul className="explore-links flex space-around align-center">
          <li className="flex align-center side">
            <i class="ri-ancient-pavilion-line"></i>
            <p>Trip Ideas</p>
          </li>
          <li className="flex align-center side">
            <i class="ri-money-dollar-circle-fill"></i>
            <div>
              <h2>TripMoney</h2>
              <p>Loan Credit and More</p>
            </div>
          </li>
          <li className="flex align-center side">
            <i class="ri-global-fill"></i>
            <div>
              <h2>Explore International Flights</h2>
              <p className="active">Cheapest Flights to Paris</p>
            </div>
          </li>
          <li className="flex align-center side">
            <i class="ri-map-pin-2-fill"></i>
            <p>Near Gateways</p>
          </li>
          <li className="flex align-center">
            <i class="ri-gift-2-line"></i>
            <p>Gift Cards</p>
          </li>
        </ul>
        <GuideLines />
      </section>
    </>
  );
}

export default Explore;
