import { getStartDate } from "../../utils/date";
import { isSameDate } from "../../utils/date";

const FORMAT_TIME = "HH:mm";
const FORMAT_DATE_TIME = "HH:mm DD MMMM YYYY";

export function setPeriodTime(event) {
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

export function getPeriodTime(event, selectedDate, fieldDate) {
  return isSameDate(selectedDate, event[fieldDate])
    ? event[fieldDate].format(FORMAT_TIME)
    : event[fieldDate].format(FORMAT_DATE_TIME);
}
