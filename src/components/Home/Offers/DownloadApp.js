function DownLoadApp() {
  return (
    <section className="download">
      <div className="container">
        <h2>Download App Now !</h2>
        <h3>
          Get India's #1 travel super app, join 100 Million+ happy travellers!
        </h3>

        <article>
          <div className="column flex ">
            <div className="column flex justify-between">
              <div>
                <img src="./image/download.png"></img>
              </div>
              <div>
                <p>
                  Use code WELCOMEMMT and get upto Rs 1200 off on your first
                  domestic flight booking
                </p>
                <form>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                  <button>Get App Link</button>
                </form>
              </div>
            </div>
            <div className="flex flex-30">
              <div className="img-wrapper">
                <img src="https://martech.org/wp-content/uploads/2012/03/Google-Play-Logo-black-600x180.jpg"></img>
                <img src="https://w7.pngwing.com/pngs/422/842/png-transparent-apple-store-logo-app-store-android-google-play-get-started-now-button-text-logo-black.png"></img>
              </div>
              <div className="img-wrapper">
                <img src="./image/qr.svg"></img>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DownLoadApp;
