import { useSelector } from "react-redux";
import styled from "styled-components";
import { setDayJs, isBetweenDate, formatDate } from "../../utils/date";
import { selectCurrentDate, selectEvent } from "../../libs/eventSlice";
import EmptyEvent from "./EmptyEvent";
import EventItem from "./EventItem";

const Container = styled.div`
  padding: 0 16px;
  flex: 1;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;

const EventList = styled.div`
  padding: 0;
`;

export default function Event() {
  const currentDate = useSelector(selectCurrentDate);
  const selectedDate = setDayJs(currentDate);
  const events = useSelector(selectEvent);

  const currentEvents = events.filter((event) =>
    isBetweenDate(selectedDate, event.startDate, event.endDate)
  );

  if (currentEvents.length === 0) return <EmptyEvent />;
  return (
    <Container>
      <EventList>
        <Header>{formatDate(selectedDate)}</Header>
        {currentEvents.map((event) => {
          return (
            <EventItem
              key={event.title}
              event={event}
              selectedDate={selectedDate}
            />
          );
        })}
      </EventList>
    </Container>
  );
}
