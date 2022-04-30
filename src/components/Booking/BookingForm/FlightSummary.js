function FlightSummary() {
  return (
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
  );
}

export default FlightSummary;
