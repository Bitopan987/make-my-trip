function FlightDetails() {
  return (
    <section className="details-section">
      <div className="flight-details">
        <div className="wrapper">
          <div className="flex justify-between ">
            <div>
              <h2>
                New Delhi <i class="ri-arrow-right-line"></i> Bengaluru
              </h2>
              <p className="padding">
                <span>Friday,Apr 22</span> Non-Stop 2h 50m
              </p>
              <div className="flex  align-center">
                <img
                  className="logo"
                  src="./image/indigo-logo.png"
                  alt="indigo-logo"
                ></img>
                <strong>IndiGo 6E-5036</strong>
              </div>
            </div>
            <div>
              <h3 className="green">CANCELLATION FEES APPLY</h3>
              <h4 className="padding">View Fare Rules</h4>
              <p>
                Economy<span>SAVER</span>
              </p>
            </div>
          </div>
          <article className="ticket flex justify-between">
            <div className="flex">
              <div className="box">
                <h3>2:25</h3>
                <h3>2:25</h3>
              </div>
              <div>
                <p>
                  <strong>NewDelhi </strong>Indira Gandhi International Airport
                  Terminal 3
                </p>
                <p className="totaltime">2h 50m</p>
                <p>
                  <strong>Bengaluru </strong>Bengaluru International Airport
                  Terminal 3
                </p>
              </div>
            </div>
            <div>
              <p>Baggage</p>
              <h3 className="padding">ADULT</h3>
            </div>
            <div>
              <p>Check-in</p>
              <h3 className="padding">15 kgs(1 piece)</h3>
            </div>
            <div>
              <p>Cabin</p>
              <h3 className="padding">7 Kgs(1 piece)</h3>
            </div>
          </article>
        </div>
        <div className="add flex justify-between">
          <p className="flex ">
            <i class="ri-gift-fill red"></i>
            Get excess luggage? Don't stress buy extra check-in luggage
          </p>
          <div>
            <a href="/" className="flex">
              <i class="ri-add-fill blue"></i>
              <span className="blue">Add</span>
            </a>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="header flex justify-between ">
          <div className="flex align-center">
            <div className="flex align-center">
              <i class="ri-profile-fill"></i>
              <span>ADULT(12yrs)</span>
            </div>
            <p className="red">PLease select/add 1 ADULT</p>
          </div>
          <h2>
            <span>0/1</span>added
          </h2>
        </div>

        <div className="input-wrapper">
          <p>You have not added any adults to the list</p>
          <button className="btn-add">+ ADD NEW ADULT</button>
        </div>
        <form className="form-2">
          <h4 className="padding">Booking details will be sent to </h4>
          <div className="flex align-center justify-between">
            <div className="input-item">
              <label for="code">Country Code</label>
              <input
                type="number"
                id="code"
                name="code"
                placeholder="+91"
              ></input>
            </div>
            <div className="input-item">
              <label for="">Mobile No</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                placeholder="Mobile No"
              ></input>
              <p>Mobile No is required</p>
            </div>
            <div className="input-item">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <p>Email is required</p>
            </div>
          </div>
          <div className="form-footer">
            <label>
              <input type="checkbox" name="checkbox"></input>I have a GST Number
              (optional)
            </label>
          </div>
          <div className="padding-1">
            <button className="btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FlightDetails;
