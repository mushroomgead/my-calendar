import styled from "styled-components";
import { useEffect, useState } from "react";
import { getNumberOfDaysInMonth } from "./utils";
import DaysOfWeek from "./DaysOfWeek";
import MonthPicker from "./MonthPicker";
import DayList from "./DayList";
import { CURRENT_YEAR, CURRENT_MONTH, TODAY, setDayJs } from "../../utils/date";

const Container = styled.div`
  background: pink;
`;

export default function Calendar(props) {
  const { onDateChange, events } = props;
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
        onDateChange={handleOnDateChange}
      />
    </Container>
  );
}
