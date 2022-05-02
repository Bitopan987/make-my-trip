import { useSelector } from 'react-redux';

import { formatDate } from '../../utils/styleUtils';

import Button from '../Common/Button';
import FareType from './FareType';

function SubHeader() {
  const { cityFrom, cityTo, departureDate, returnDate } = useSelector(
    (state) => state.booking
  );

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
              <p>{cityFrom.cityName}</p>
            </div>
            <div>
              <i class="ri-arrow-left-right-line"></i>
            </div>
            <div className="col">
              <h2>TO</h2>
              <p>{cityTo.cityName}</p>
            </div>
            <div className="col">
              <h2>DEPART</h2>
              <p>{formatDate(departureDate)}</p>
            </div>
            <div className="col">
              <h2>RETURN</h2>
              <p>{formatDate(returnDate)}</p>
            </div>
            <div className="col">
              <h2>PASSENGER</h2>
              <p>1 Adult,Economy</p>
            </div>
          </div>
          <div>
            <Button title={'Search'} className="btn-secondary" />
          </div>
        </div>
        <FareType />
      </div>
    </section>
  );
}

export default SubHeader;
