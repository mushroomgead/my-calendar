import styled from "styled-components";
import { setDayJs, isBetweenDate, getStartDate } from "../../utils/date";

const events = [
  {
    date: "2021-10-15",
    time: "10:00",
    durationMinute: 120,
    title: "go buy some fruites",
  },
  {
    date: "2021-10-15",
    time: "23:30",
    durationMinute: 120,
    title: "watch a football match",
  },
  {
    date: "2021-10-17",
    time: "10:30",
    durationMinute: 210,
    title: "shopping",
  },
  {
    date: "2021-10-17",
    time: "11:30",
    durationMinute: 60,
    title: "lunch with friends",
  },
  {
    date: "2021-10-18",
    time: "08:00",
    durationMinute: 480,
    title: "office day",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function getDuration(event) {
  const date = event.date;
  const durationMinute = event.durationMinute;
  const timeArgs = event.time.split(":");
  const hour = timeArgs[0];
  const minute = timeArgs[1];
  const startDate = getStartDate(date, hour, minute);
  const endDate = startDate.add(durationMinute, "minute");

  const eventPeriod = {
    eventType: startDate.isSame(endDate, "date") ? "SameDate" : "AnotherDate",
    startDate,
    endDate,
  };
  return { ...eventPeriod, ...event };
}

export default function Event() {
  const selectedDate = setDayJs("2021-10-15");
  const currentEvents = events.map((event) => {
    const eventPeriod = getDuration(event);
    const { startDate, endDate } = eventPeriod;

    if (isBetweenDate(selectedDate, startDate, endDate)) {
      return eventPeriod;
    }
    return null;
  });

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
