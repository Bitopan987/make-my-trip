function FareType() {
  return (
    <section className="flex fare-type justify-between align-center">
      <div>
        <form className="flex justify-between align-center">
          <h2>
            Select A <br /> FareType:
          </h2>
          <div className="flex align-center col-1">
            <input
              type="radio"
              checked
              name="fare"
              placeholder=""
              id="regualar"
            />
            <label for="fare">Redular Fares</label>
          </div>
          <div className="flex align-center col-1">
            <input type="radio" name="fare" placeholder="" id="fare" />
            <label for="fare">
              Armed Forces Fare <span>NEW</span>
            </label>
          </div>
          <div className="flex align-center col-1">
            <input type="radio" name="fare" placeholder="" id="fare" />
            <label for="fare">Senior Citizen Fares</label>
          </div>
          <div className="flex align-center col-disable">
            <input type="radio" disabled name="fare" placeholder="" id="fare" />
            <label>Double Seat Fares</label>
          </div>
        </form>
      </div>

      <div className="flex justify-between align-center recent">
        <h2>Recent Searches :</h2>
        <div className="wrapper">
          <h3>
            Delhi<i class="ri-arrow-left-right-line"></i> Bengaluru
          </h3>
          <p>29 Apr 22-30 Apr 22</p>
        </div>
        <div className="wrapper">
          <h3>
            Delhi<i class="ri-arrow-left-right-line"></i> Bengaluru
          </h3>
          <p>28 Apr 22</p>
        </div>
      </div>
    </section>
  );
}

export default FareType;
