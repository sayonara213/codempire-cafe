import React, { useEffect, useState } from 'react';

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
      />
      <Styled.StyledDatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption='Time'
        dateFormat='hh:mm'
        calendarContainer={Styled.TimeContainer}
      />
    </Styled.DatePickerContainer>
  );
};

export default GlobalDatePicker;
