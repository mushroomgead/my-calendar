import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Calendar from "./features/Calendar";
import Event from "./features/Event";
import {
  selectCurrentDate,
  selectEvent,
  setCurrentDate,
  setEventData,
} from "./libs/eventSlice";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1150px;
  margin: 0 auto;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvent);
  const selectedDate = useSelector(selectCurrentDate);

  useEffect(() => {
    dispatch(setEventData());
  }, []);

  const handleOnDateChange = (date) => {
    dispatch(setCurrentDate(date));
  };

  return (
    <Container>
      <Calendar
        onDateChange={handleOnDateChange}
        events={events}
        selectedDate={selectedDate}
      />
      <Event />
    </Container>
  );
}

export default App;
