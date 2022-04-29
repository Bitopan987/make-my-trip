function SubHeader() {
  return (
    <section className="subheader">
      <div className="container">
        <div className="flex align-center justify-between">
          <div className="flex align-center ">
            <div className="col flex align-center">
              <div>
                <h2>TRIP TYPE</h2>
                <p>Round Trip</p>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className="col">
              <h2>FROM</h2>
              <p>New Delhi,India</p>
            </div>
            <div>
              <i class="ri-arrow-left-right-line"></i>
            </div>
            <div className="col">
              <h2>TO</h2>
              <p>Bengaluru,India</p>
            </div>
            <div className="col">
              <h2>DEPART</h2>
              <p>Fri,Apr,29,2022</p>
            </div>
            <div className="col">
              <h2>RETURN</h2>
              <p>Sat,Apr,30,2022</p>
            </div>
            <div className="col">
              <h2>PASSENGER</h2>
              <p>1 Adult,Economy</p>
            </div>
          </div>
          <div>
            <button className="btn-secondary">Search</button>
          </div>
        </div>
        <div className="option_header">
          <form className="flex  align-center">
            <h2>FareType:</h2>
            <div className="flex align-center option">
              <input type="radio" name="fare" placeholder="" id="regualar" />
              <label for="fare">Redular </label>
            </div>
            <div className="flex align-center option">
              <input type="radio" name="fare" placeholder="" id="fare" />
              <label for="fare">
                Armed Forces <span>NEW</span>
              </label>
            </div>
            <div className="flex align-center option">
              <input type="radio" name="fare" placeholder="" id="fare" />
              <label for="fare">Student</label>
            </div>
            <div className="flex align-center option">
              <input type="radio" name="fare" placeholder="" id="fare" />
              <label for="fare">Senior Citizen</label>
            </div>
            <div className="flex align-center option">
              <input
                type="radio"
                disabled
                name="fare"
                placeholder=""
                id="fare"
              />
              <label>Double Seat</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
