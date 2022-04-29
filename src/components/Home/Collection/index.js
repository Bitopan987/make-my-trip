import Carousel from 'react-multi-carousel';
import Apply from './Apply';

function Collection() {
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
    <section className="collection">
      <div className="container">
        <article className="column">
          <h2 className="title">Handpicked Collections for You</h2>
          <Carousel className="box" responsive={responsive}>
            <div className="img-card">
              <img src="./image/dubai.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/goa.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/romantic.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/travellug123.png"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/dubai.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/dubai.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/dubai.jpg"></img>
              <div className="top">
                <p className="text">TOP11</p>
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
          </Carousel>
        </article>
        <article className="column">
          <h2 className="title">Unlock Lesser-Known Wonders of India</h2>
          <Carousel className="box" responsive={responsive}>
            <div className="img-card">
              <img src="./image/nature1.webp"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/nature2.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/nature3.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/dubai.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/nature3.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="./image/hill.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
            <div className="img-card">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg"></img>
              <div className="top">
                <h2>Shimla's Best Kept Secret</h2>
              </div>
            </div>
          </Carousel>
        </article>
      </div>
      <Apply />
    </section>
  );
}

export default Collection;
