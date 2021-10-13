import { useSelector } from "react-redux";
import styled from "styled-components";
import { setDayJs, isBetweenDate } from "../../utils/date";
import { selectCurrentDate, selectEvent } from "./eventSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Event() {
  const currentDate = useSelector(selectCurrentDate);
  const selectedDate = setDayJs(currentDate);
  const events = useSelector(selectEvent);

  const currentEvents = events.filter((event) =>
    isBetweenDate(selectedDate, event.startDate, event.endDate)
  );

  return (
    <Container>
      <div>Events</div>
      <ul>
        {currentEvents.map((event) => {
          return (
            event && (
              <li key={event.title}>
                <span>{event.startDate.format("HH:mm")}</span>
                <span>{event.title}</span>
              </li>
            )
          );
        })}
      </ul>
    </Container>
  );
}
