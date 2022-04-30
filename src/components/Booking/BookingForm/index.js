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
                        <strong>NewDelhi </strong>Indira Gandhi International
                        Airport Terminal 3
                      </p>
                      <p className="totaltime">2h 50m</p>
                      <p>
                        <strong>Bengaluru </strong>Bengaluru International
                        Airport Terminal 3
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
                    <input type="checkbox" name="checkbox"></input>I have a GST
                    Number (optional)
                  </label>
                </div>
                <div className="padding-1">
                  <button className="btn-primary">Continue</button>
                </div>
              </form>
            </div>
          </section>
          <aside className="flex-30 summary">
            <div>
              <h2>Fare Summary</h2>
              <div className="flex col justify-between align-center">
                <div className="flex  align-center">
                  <i class="ri-add-circle-line"></i>
                  <h5>Base Fare</h5>
                </div>
                <p>₹ 5060</p>
              </div>
              <div className="flex  col justify-between align-center">
                <div className="flex  align-center">
                  <i class="ri-add-circle-line"></i>
                  <h5>Base Fare</h5>
                </div>
                <p>₹ 5060</p>
              </div>
              <div className="flex  align-center">
                <i class="ri-add-circle-line"></i>
                <h5 className="padding">Base Fare</h5>
              </div>
              <div className="flex justify-between align-center">
                <p>
                  Chairity<span>REMOVE</span>
                </p>
                <p>₹ 50</p>
              </div>
              <div className="flex justify-between align-center">
                <p>Zero Cancellation</p>
                <p>₹ 859</p>
              </div>
              <div className="total flex justify-between">
                <h2>Total Summary </h2>
                <h2>₹ 909</h2>
              </div>
            </div>
            <div className="promo">
              <h3>Promo Code</h3>
              <input
                type="number"
                name="promo"
                placeholder="Enter Promo code here"
              ></input>
              <div className="promo-box ">
                <h2>MMTSUPER</h2>
                <p>
                  Use this coupon and get Rx 309 instant booking on your flight
                  booking
                </p>
                <h6>Terms & Condition</h6>
              </div>
              <div className="promo-box ">
                <h2>MMTSUPER</h2>
                <p>
                  Use this coupon and get Rx 309 instant booking on your flight
                  booking
                </p>
                <h6>Terms & Condition</h6>
              </div>
              <div className="promo-box ">
                <h2>MMTSUPER</h2>
                <p>
                  Use this coupon and get Rx 309 instant booking on your flight
                  booking
                </p>
                <h6>Terms & Condition</h6>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
}

export default BookingForm;
