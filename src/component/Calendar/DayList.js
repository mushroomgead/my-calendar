import styled from "styled-components";

const Container = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
`;

const Day = styled.span`
  background: yellow;
`;
export default function DayList({ days }) {
  const blankDays = days?.blankDays;
  const daysInMonth = days?.daysArray;

  return (
    <Container>
      {blankDays?.map((_, i) => (
        <Day key={i}></Day>
      ))}
      {daysInMonth?.map((date, i) => (
        <Day key={i}>{date}</Day>
      ))}
    </Container>
  );
}
