import Calendar from "./component/Calendar";
import Event from "./component/Event";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <Container>
      <Calendar />
      <Event />
    </Container>
  );
}

export default App;
