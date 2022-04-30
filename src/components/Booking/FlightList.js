const FlightData = [
  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '4:10',
      departure: '2:00',
    },
    duration: '02 h 10m',
    price: '₹ 7,319',
  },
  {
    logo: './image/airasia.png',
    operator: 'Air Asia',
    time: {
      arrival: '14:50',
      departure: '13:00',
    },
    duration: '01h 50m',
    price: '7319',
  },
  {
    logo: './image/gofirst.jpg',
    operator: 'Go First',
    time: {
      arrival: '16:10',
      departure: '14:00',
    },
    duration: '02h 10m',
    price: '7000',
  },
  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '15:10',
      departure: '13:00',
    },
    duration: '02 h 10m',
    price: '₹ 7,209',
  },

  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '19:05',
      departure: '17:00',
    },
    duration: '02h 5m',
    price: '₹ 7,209',
  },
  {
    logo: './image/airasia.png',
    operator: 'Air Asia',
    time: {
      arrival: '20:55',
      departure: '18:40',
    },
    duration: '02h 15m',
    price: '7319',
  },
  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '4:10',
      departure: '2:00',
    },
    duration: '02 h 10m',
    price: '₹ 7,319',
  },
  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '1:00',
      departure: '22:45',
    },
    duration: '02 h 10m',
    price: '₹ 7,319',
  },
  {
    logo: './image/indigo-logo.png',
    operator: 'IndiGo',
    time: {
      arrival: '21:10',
      departure: '18:55',
    },
    duration: '02 h 15m',
    price: '₹ 7,319',
  },
  {
    logo: './image/gofirst.jpg',
    operator: 'Go First',
    time: {
      arrival: '16:10',
      departure: '14:00',
    },
    duration: '02h 10m',
    price: '7000',
  },
];

function FlightList() {
  return (
    <section className="flight-list">
      <h1 className="heading">Flights from New Delhi to Bengaluru</h1>
      <div className="flex flex-wrap justify-between align-center">
        {FlightData.map((data) => {
          return (
            <label for={data.operator} className="flight-content">
              <div className="flex justify-between align-center">
                <div className="flex align-center">
                  <img className="logo" alt="logo" src={data.logo}></img>
                  <h2>{data.operator}</h2>
                </div>
                <div>
                  <input
                    type="radio"
                    id={data.operator}
                    name="fav_flight"
                    value=""
                  />
                </div>
              </div>
              <div className="details flex justify-between align-center">
                <div>
                  <strong>{data.time.departure}</strong>
                  <p>New Delhi</p>
                </div>
                <div>
                  <h6>{data.duration}</h6>
                  <p>Non stop</p>
                </div>
                <div>
                  <strong>{data.time.departure}</strong>
                  <p>Bengaluru</p>
                </div>
                <h2 className="price">{data.price}</h2>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}

export default FlightList;
