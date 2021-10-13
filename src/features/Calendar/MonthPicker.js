import styled from "styled-components";
import { getMonthName } from "../../utils/date";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 16px;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const Date = styled.span`
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
`;
const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 10px solid #cfcfcf;
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #cfcfcf;
`;
const Picker = styled.div`
  display: flex;
`;

export default function MonthPicker({
  month,
  year,
  setToday,
  setPrevMonth,
  setNextMonth,
}) {
  return (
    <Container>
      <Date>{getMonthName(month, year)}</Date>
      <Picker>
        <Button aria-label="prev-month" onClick={setPrevMonth}>
          <ArrowLeft />
        </Button>
        <Button aria-label="today" onClick={setToday}>
          TODAY
        </Button>
        <Button aria-label="next-month" onClick={setNextMonth}>
          <ArrowRight />
        </Button>
      </Picker>
    </Container>
  );
}
