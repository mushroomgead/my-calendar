import styled, { css } from "styled-components";
import { setDayJs, isSameDate } from "../../utils/date";
import { checkHasEvents } from "./utils";

const Container = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border-top: 1px solid #dbdbdb;
  padding-top: 4px;
`;

const BlockItem = styled.span`
  display: flex;
  padding: 10px;
  height: 35px;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

const DayItem = styled(BlockItem)`
  &:hover {
    background-color: #2ecc7026;
    font-weight: bold;
    color: #000;
    border-radius: 3px;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #2ecc7026;
      font-weight: bold;
      color: #000;
      border-radius: 3px;
    `}
`;

const DotActive = styled.span`
  display: block;
  background: #3f51b5;
  width: 6px;
  height: 6px;
  border-radius: 100%;
`;

export default function DayList(props) {
  const { year, month, list, onDateChange, events, selectedDate } = props;
  const blankDays = list?.blankDays;
  const daysInMonth = list?.daysArray;

  return (
    <Container>
      {blankDays?.map((_, i) => (
        <BlockItem key={i}></BlockItem>
      ))}
      {daysInMonth?.map((date, i) => {
        const currentDate = setDayJs(`${year}-${month + 1}-${date}`);
        const hasEvents = checkHasEvents(events, currentDate);
        const isSelected = isSameDate(selectedDate, currentDate);

        return (
          <DayItem
            key={i}
            onClick={() => onDateChange(date)}
            isSelected={isSelected}
          >
            <span>{date}</span>
            {hasEvents && <DotActive />}
          </DayItem>
        );
      })}
    </Container>
  );
}
