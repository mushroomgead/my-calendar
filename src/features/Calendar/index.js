import { useEffect, useState } from "react";
import styled from "styled-components";
import { CURRENT_YEAR, CURRENT_MONTH, TODAY, setDayJs } from "../../utils/date";
import { getNumberOfDaysInMonth } from "./utils";

import DaysOfWeek from "./DaysOfWeek";
import MonthPicker from "./MonthPicker";
import DayList from "./DayList";

const Container = styled.div`
  width: 50%;
  box-shadow: 1px -1px 13px -2px rgb(0 0 0 / 25%);
  padding: 16px;
  border-radius: 12px;
  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
  }
`;

export default function Calendar(props) {
  const { onDateChange, events, selectedDate } = props;
  const [year, setYear] = useState(CURRENT_YEAR);
  const [month, setMonth] = useState(CURRENT_MONTH);
  const [dayList, setDayList] = useState(null);

  useEffect(() => {
    setDayList(getNumberOfDaysInMonth(year, month));
  }, [year, month]);

  const setToday = () => {
    setMonth(CURRENT_MONTH);
    setYear(CURRENT_YEAR);
    onDateChange(TODAY);
  };

  const setPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const setNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleOnDateChange = (date) => {
    const selectedDate = setDayJs(`${year}-${month + 1}-${date}`);
    onDateChange(selectedDate);
  };

  return (
    <Container>
      <MonthPicker
        month={month}
        year={year}
        setToday={setToday}
        setPrevMonth={setPrevMonth}
        setNextMonth={setNextMonth}
      />
      <DaysOfWeek />
      <DayList
        list={dayList}
        year={year}
        month={month}
        events={events}
        selectedDate={selectedDate}
        onDateChange={handleOnDateChange}
      />
    </Container>
  );
}
