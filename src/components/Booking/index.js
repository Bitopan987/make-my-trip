import Header from './Header';
import SubHeader from './SubHeader';
import FlightList from './FlightList';
import Filter from './Filter';

function FlightBooking() {
  return (
    <div>
      <Header />
      <SubHeader />
      <section className="main">
        <div className="container flex ">
          <Filter />
          <FlightList />
        </div>
      </section>
    </div>
  );
}

export default FlightBooking;
