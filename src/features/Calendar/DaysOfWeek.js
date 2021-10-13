import styled from "styled-components";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 16px 0;
  font-weight: bold;
`;

export default function DayOfWeek() {
  return (
    <Container>
      {WEEKDAYS.map((weekday) => (
        <Item key={weekday}>{weekday}</Item>
      ))}
    </Container>
  );
}
