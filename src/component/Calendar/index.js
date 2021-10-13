import styled from "styled-components";
import { useEffect, useState } from "react";
import { getNumberOfDaysInMonth } from "./utils";
import DaysOfWeek from "./DaysOfWeek";
import MonthPicker from "./MonthPicker";
import DayList from "./DayList";
import { CURRENT_YEAR, CURRENT_MONTH } from "../../utils/date";

const Container = styled.div`
  background: pink;
`;

export default function Calendar() {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [month, setMonth] = useState(CURRENT_MONTH);
  const [days, setDays] = useState(null);

  useEffect(() => {
    setDays(getNumberOfDaysInMonth(year, month));
  }, [year, month]);

  const setToday = () => {
    setMonth(CURRENT_MONTH);
    setYear(CURRENT_YEAR);
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
      <DayList days={days} />
    </Container>
  );
}
