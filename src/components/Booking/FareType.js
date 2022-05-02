function FareType() {
  return (
    <div className="option_header">
      <form className="flex  align-center">
        <h2>FareType:</h2>
        <div className="flex align-center option">
          <input
            type="radio"
            checked
            name="fare"
            placeholder=""
            id="regualar"
          />
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
          <input type="radio" disabled name="fare" placeholder="" id="fare" />
          <label>Double Seat</label>
        </div>
      </form>
    </div>
  );
}

export default FareType;
