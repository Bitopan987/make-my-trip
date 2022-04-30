import DatePicker from 'react-datepicker';

function DateSelect({ title, date, onChange, datePicking, setDatePicking }) {
  return (
    <div className="col flex-15">
      <div onClick={() => setDatePicking(true)}>
        <h3>{title}</h3>
        <h2>
          {date.getDate()}
          <span>
            {' '}
            {date.toLocaleString('default', { month: 'short' })}'
            {date.toLocaleString('default', { year: '2-digit' })}
          </span>
        </h2>
        <p>{date.toLocaleString('default', { weekday: 'long' })}</p>
      </div>
      {datePicking && (
        <DatePicker
          open={true}
          selected={date}
          autoFocus={true}
          customInput={<></>}
          onChange={(date = new Date()) => onChange(date)}
        />
      )}
    </div>
  );
}

export default DateSelect;
