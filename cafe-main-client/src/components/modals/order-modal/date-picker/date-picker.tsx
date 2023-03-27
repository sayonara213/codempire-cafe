import React from 'react';

import { setMinutes, setHours } from 'date-fns';
import * as Styled from './date-picker.styled';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  date: Date;
  setDate: any;
}

const GlobalDatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => {
  return (
    <Styled.DatePickerContainer>
      <Styled.StyledDatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat='MM/dd/yy'
        calendarContainer={Styled.CalendarContainer}
        minDate={new Date()}
      />
      <Styled.StyledDatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeSelectOnly
        showTimeSelect
        timeIntervals={15}
        timeCaption='Time'
        dateFormat='HH:mm'
        timeFormat='HH:mm'
        calendarContainer={Styled.TimeContainer}
        minTime={setHours(setMinutes(new Date(), 0), 7)}
        maxTime={setHours(setMinutes(new Date(), 0), 21)}
      />
    </Styled.DatePickerContainer>
  );
};

export default GlobalDatePicker;
