import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUserData } from '../../../redux/bookingSlice';

import Button from '../../Common/Button';

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const booking = useSelector((state) => state.booking);
  const { userData, cityTo, cityFrom } = booking;

  const [state, setState] = useState(userData);

  const onSubmit = (e) => {
    e.preventDefault();
    const myTrips = JSON.parse(localStorage.getItem('my-trips')) || [];
    localStorage.setItem('my-trips', JSON.stringify([...myTrips, booking]));
    localStorage.setItem('bookingInProgress', '');
    alert(
      `You have booked a flight from ${cityFrom.cityName} to ${cityTo.cityName}.`
    );
    navigate('/');
  };

  useEffect(() => {
    dispatch(setUserData(state));
  }, [state]);

  return (
    <form className="form-2">
      <h4 className="padding">Booking details will be sent to </h4>
      <div className="flex align-center justify-between">
        <div className="input-item">
          <label for="code">Country Code</label>
          <input
            onChange={(e) =>
              setState((state) => ({ ...state, countryCode: e.target.value }))
            }
            type="number"
            value={state.countryCode}
            id="code"
            name="code"
            placeholder="+91"
          ></input>
        </div>
        <div className="input-item">
          <label for="mobile">Mobile No</label>
          <input
            type="number"
            id="mobile"
            value={state.mobileNumber}
            name="mobile"
            placeholder="Mobile No"
            onChange={(e) =>
              setState((state) => ({ ...state, mobileNumber: e.target.value }))
            }
          ></input>
          <p>Mobile No is required</p>
        </div>
        <div className="input-item">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={(e) =>
              setState((state) => ({ ...state, email: e.target.value }))
            }
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
        <Button title={'Continue'} onClick={onSubmit} className="btn-primary" />
      </div>
    </form>
  );
}

export default UserForm;
