import classes from './DatePicker.module.scss';
import ReactWeeklyDayPicker from "react-weekly-day-picker";

const DatePicker = (props) => {
  const currentDate = new Date()
  currentDate.getDay()
  
  return (
    <ReactWeeklyDayPicker
        startDay={new Date()}
        multipleDaySelect={false}
        daysCount={7}
        beforeToday={true}
        unavailableText={" "}
        selectDay={function (Today) {
          props.handleDateChange(Today)
        }}
        selectedDays={[props.selectedDay, new Date(props.selectedDay)]}
        format={'YYYY-MM-DD'} //format of dates that handled in selectDay and unselectDay functions
        firstLineFormat={'ddd'} // format for the first line of the day button
        secondLineFormat={'D MMM'} // format for the second line of the day button
        firstLineMobileFormat={'dddd'} // format for the first line of the day button mobile
        secondLineMobileFormat={'MMMM D, Y'} // format for the second line of the day button mobile
        todayText={"oggi"}
        
    />
  );
};

export default DatePicker;





