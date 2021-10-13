import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 4px;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  flex: 1;
  text-align: center;
`;

export default function EmptyEvent() {
  return <Container>No Events</Container>;
}
