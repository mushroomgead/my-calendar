import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "./features/Calendar";
import Event from "./features/Event";
import {
  setCurrentDate,
  selectEvent,
  setEventPeriod,
} from "./features/Event/eventSlice";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvent);

  useEffect(() => {
    dispatch(setEventPeriod());
  }, []);

  const handleOnDateChange = (date) => {
    dispatch(setCurrentDate(date));
  };

  return (
    <Container>
      <Calendar onDateChange={handleOnDateChange} events={events} />
      <Event />
    </Container>
  );
}

export default App;
