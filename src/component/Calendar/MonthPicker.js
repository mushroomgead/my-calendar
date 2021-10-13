import styled from "styled-components";
import { getMonthName } from "../../utils/date";

const Button = styled.button``;

export default function MonthPicker({
  month,
  year,
  setToday,
  setPrevMonth,
  setNextMonth,
}) {
  return (
    <div>
      {getMonthName(month, year)}
      <Button onClick={setPrevMonth}>Previous</Button>
      <Button onClick={setToday}>Today</Button>
      <Button onClick={setNextMonth}>Next</Button>
    </div>
  );
}
