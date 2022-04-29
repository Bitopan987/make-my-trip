import Hero from './Hero';
import Explore from './Explore';
import Offers from './Offers';
import Collection from './Collection';
import AboutUs from './About';
import Flight from './Flight';
import Header from '../Header';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <Offers />
      <Collection />
      <Flight />
      <AboutUs />
    </>
  );
}

export default Home;
