import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function GuideLines() {
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
    <section className="guideline">
      <div className="container">
        <Carousel responsive={responsive}>
          <div className="card flex align-center">
            <div>
              <img src="./image/aeroplane.png"></img>
            </div>
            <div>
              <h3 className="text">Flight booking impacted due to COVID-19?</h3>
              <p>Check refund status here</p>
            </div>
          </div>
          <div className="card flex align-center">
            <div>
              <img src="./image/aeroplane.png"></img>
            </div>
            <div>
              <h3 className="text">Flight booking impacted due to COVID-19?</h3>
              <p>Check refund status here</p>
            </div>
          </div>
          <div className="card flex align-center">
            <div>
              <img src="./image/aeroplane.png"></img>
            </div>
            <div>
              <h3 className="text">Flight booking impacted due to COVID-19?</h3>
              <p>Check refund status here</p>
            </div>
          </div>
          <div className="card flex align-center">
            <div>
              <img src="./image/aeroplane.png"></img>
            </div>
            <div>
              <h3 className="text">Flight booking impacted due to COVID-19?</h3>
              <p>Check refund status here</p>
            </div>
          </div>
          <div className="card flex align-center">
            <div>
              <img src="./image/aeroplane.png"></img>
            </div>
            <div>
              <h3 className="text">Flight booking impacted due to COVID-19?</h3>
              <p>Check refund status here</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default GuideLines;
