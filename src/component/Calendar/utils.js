import { getDaysInMonth, getDayOfWeek } from "../../utils/date";

export function getNumberOfDaysInMonth(year, month) {
  const daysInMonth = getDaysInMonth(year, month);
  const dayOfWeek = getDayOfWeek(year, month);
  let blankDaysArray = [];
  let daysArray = [];

  // Fill blank days
  for (let i = 1; i <= dayOfWeek; i++) {
    blankDaysArray.push(i);
  }

  // Fill days in month
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return {
    blankDays: blankDaysArray,
    daysArray: daysArray,
  };
}
