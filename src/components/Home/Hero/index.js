import Navbar from './Navbar';
import SearchFlight from './SearchFlight';

function Hero() {
  return (
    <>
      <section className=" hero-section">
        <div className="container">
          <Navbar />
          <SearchFlight />
        </div>
      </section>
    </>
  );
}

export default Hero;
