import { getStartDate } from "../../utils/date";
import { isSameDate } from "../../utils/date";

export function setPeriod(event) {
  const date = event.date;
  const durationMinute = event.durationMinute;
  const timeArgs = event.time.split(":");
  const hour = timeArgs[0];
  const minute = timeArgs[1];
  const startDate = getStartDate(date, hour, minute);
  const endDate = startDate.add(durationMinute, "minute");

  return {
    startDate,
    endDate,
    ...event,
  };
}

export const getPeriodTime = (event, selectedDate, fieldDate) => {
  return isSameDate(selectedDate, event[fieldDate])
    ? event[fieldDate].format("HH:mm")
    : event[fieldDate].format("HH:mm DD MMMM YYYY");
};
