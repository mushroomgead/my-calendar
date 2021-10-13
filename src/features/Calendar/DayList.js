import styled from "styled-components";
import { setDayJs } from "../../utils/date";
import { checkHasEvent } from "./utils";

const Container = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`;

const Day = styled.span`
  background: yellow;
  padding: 10px;
`;

const DotActive = styled.span`
  display: block;
  background: red;
  width: 10px;
  height: 10px;
  border-radius: 100%;
`;

export default function DayList(props) {
  const { year, month, list, onDateChange, events } = props;
  const blankDays = list?.blankDays;
  const daysInMonth = list?.daysArray;

  return (
    <Container>
      {blankDays?.map((_, i) => {
        return <Day key={i}></Day>;
      })}
      {daysInMonth?.map((date, i) => {
        const currentDate = setDayJs(`${year}-${month + 1}-${date}`);
        const hasEvents = checkHasEvent(events, currentDate);

        return (
          <Day key={i} onClick={() => onDateChange(date)}>
            {date}
            {hasEvents && <DotActive />}
          </Day>
        );
      })}
    </Container>
  );
}
