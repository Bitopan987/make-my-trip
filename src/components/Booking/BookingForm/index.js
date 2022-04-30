import FlightDetails from './FlightDetails';
import FlightSummary from './FlightSummary';

function BookingForm() {
  return (
    <section className="booking-form">
      <header className="form-header">
        <div className="container flex justify-between align-center">
          <h1>Complete your booking</h1>
          <nav>
            <ul className="flex navlinks align-center">
              <li className="flex">
                <a id="active" href="/">
                  Flights Summary
                </a>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li className="flex">
                <a href="/">Travel Insurance</a>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li className="flex">
                <a href="/">Traveller Details</a>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li className="flex">
                <a href="/">Seats & Meals</a>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li className="flex">
                <a href="/">Add-ons</a>
                <i class="ri-arrow-down-s-line"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-section">
        <div className="container flex ">
          <FlightDetails />
          <FlightSummary />
        </div>
      </main>
    </section>
  );
}

export default BookingForm;
