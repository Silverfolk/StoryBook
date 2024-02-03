import PropTypes from 'prop-types';

const Calendar = ({ label }) => {
    const calendarStyles={
        display: "flex",
       flexDirection: "column"
    }
  return (
    <div className={calendarStyles}>
      <label>{label}</label>
      <input type="date" name="date" />
    </div>
  );
};

Calendar.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Calendar;
