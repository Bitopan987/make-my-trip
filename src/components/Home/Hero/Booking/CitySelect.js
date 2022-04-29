import Select from 'react-select';
import { capitalize } from '../../../../utils/styleUtils';

import { OPTIONS } from './constants';

const CustomOption = ({ cityName, airportCode, airportName, country }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <h5>
        {cityName} {country}
      </h5>
      <span>{airportName}</span>
    </div>
    <span>{airportCode}</span>
  </div>
);

function CitySelect({
  selectedCity,
  title,
  selecting,
  setSelecting,
  onChange,
  ...props
}) {
  return (
    <div className="col flex-25 relative">
      <div onClick={() => !selecting && setSelecting(true)}>
        <h3>{title}</h3>
        <h2>{selectedCity?.cityName}</h2>
        <p>
          {selectedCity?.airportCode}, {selectedCity?.airportName}{' '}
          {selectedCity?.country}
        </p>
      </div>
      {selecting ? (
        <Select
          {...props}
          placeholder={capitalize(title)}
          menuIsOpen={true}
          className={'w-max absolute w-full'}
          autoFocus={true}
          options={OPTIONS}
          formatOptionLabel={CustomOption}
          onChange={(value) => onChange(value)}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default CitySelect;
