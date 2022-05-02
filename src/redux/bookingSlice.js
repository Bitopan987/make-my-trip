import { createSlice } from '@reduxjs/toolkit';
import { OPTIONS } from '../components/Home/Hero/SearchFlight/constants';

const initialState = {
  cityFrom: OPTIONS[0],
  cityTo: OPTIONS[1],
  departureDate: new Date(),
  returnDate: new Date(),
  passengerCount: 1,
  selectedFlight: {},
  userData: {
    countryCode: '+91',
    email: '',
    mobileNumber: '',
  },
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    setCityFrom: (state, action) => {
      state.cityFrom = action.payload;
    },
    setCityTo: (state, action) => {
      state.cityTo = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setPassengerCount: (state, action) => {
      state.passengerCount = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {
  setCityFrom,
  setDepartureDate,
  setCityTo,
  setPassengerCount,
  setReturnDate,
  setSelectedFlight,
  setUserData,
} = bookingSlice.actions;

export default bookingSlice.reducer;
