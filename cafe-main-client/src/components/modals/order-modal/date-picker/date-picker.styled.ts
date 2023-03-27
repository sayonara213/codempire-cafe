import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DatePickerContainer = styled.div`
  margin: 24px 0;

  max-width: 328px;
  display: flex;
  flex-direction: row;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 164px;
  height: 48px;
  margin-right: 15px;

  border: none;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const CalendarContainer = styled.div`
  color: ${({ theme }) => theme.color.text};
  border: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);

  position: relative;
  .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.purple};
    color: ${({ theme }) => theme.color.white};
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.white};
  }
  .react-datepicker__day {
    margin: 1px 5px;
    padding: 5px;
    font-family: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border-radius: 50%;
  }
  .react-datepicker__header {
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
  }

  .react-datepicker__day-name {
    display: none;
  }
  .react-datepicker__current-month {
    font-family: ${({ theme }) => theme.font.light};
    font-size: ${({ theme }) => theme.fontSize.small};
    letter-spacing: 0.6px;
    color: ${({ theme }) => theme.color.date};
  }
`;

export const TimeContainer = styled.div`
  color: ${({ theme }) => theme.color.text};
  border: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  .react-datepicker__header {
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
  }

  .react-datepicker__time-container {
    width: 164px;
  }
  .react-datepicker__time-box {
    all: unset;
  }
  .react-datepicker__time-list-item {
    font-family: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-datepicker__time-list {
    border-radius: 4px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: ${({ theme }) => theme.color.purple};
    color: ${({ theme }) => theme.color.white};
    font-weight: normal;
    border-radius: 4px;
  }
`;
