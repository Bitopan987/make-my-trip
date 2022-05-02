import { useState } from 'react';
import Select from 'react-select';
import { capitalize } from '../../../../utils/styleUtils';

import { OPTIONS } from './constants';

const CustomOption = ({ cityName, airportCode, airportName, country }) => (
  <div className="flex justify-between city-option">
    <div>
      <h3 className="city">
        {cityName} {country}
      </h3>
      <span className="airport-name">{airportName}</span>
    </div>
    <span className="airport-code">{airportCode}</span>
  </div>
);

function CitySelect({ selectedCity, title, onChange, ...props }) {
  const [selecting, setSelecting] = useState(false);

  return (
    <div className="col flex-25 city-select">
      <div
        onClick={() => !selecting && setSelecting(true)}
        className="cursor-pointer"
      >
        <h3>{title}</h3>
        <h2>{selectedCity?.cityName}</h2>
        <p>
          {selectedCity?.airportCode}, {selectedCity?.airportName}{' '}
          {selectedCity?.country}
        </p>
      </div>
      {selecting && (
        <Select
          {...props}
          placeholder={capitalize(title)}
          menuIsOpen={true}
          className={'w-max w-full'}
          autoFocus={true}
          options={OPTIONS}
          formatOptionLabel={CustomOption}
          onChange={(value) => {
            setSelecting(false);
            onChange(value);
          }}
        />
      )}
    </div>
  );
}

export default CitySelect;
