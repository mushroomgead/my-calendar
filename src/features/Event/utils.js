import { getStartDate } from "../../utils/date";

function getEventType(startDate, endDate) {
  if (startDate.isSame(endDate, "date")) {
    return "SameDate";
  }
  return "AnotherDate";
}

export function setPeriod(event) {
  const date = event.date;
  const durationMinute = event.durationMinute;
  const timeArgs = event.time.split(":");
  const hour = timeArgs[0];
  const minute = timeArgs[1];
  const startDate = getStartDate(date, hour, minute);
  const endDate = startDate.add(durationMinute, "minute");
  const eventType = getEventType(startDate, endDate);

  const eventPeriod = {
    eventType,
    startDate,
    endDate,
  };
  return { ...eventPeriod, ...event };
}
