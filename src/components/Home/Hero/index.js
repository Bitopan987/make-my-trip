import Navbar from './Navbar';
import Booking from './Booking';

function Hero() {
  return (
    <>
      <section className=" hero-section">
        <div className="container">
          <Navbar />
          <Booking />
        </div>
      </section>
    </>
  );
}

export default Hero;
