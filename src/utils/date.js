import dayjs from "dayjs";

const IS_BETWEEN = require("dayjs/plugin/isBetween");
dayjs.extend(IS_BETWEEN);

export const CURRENT_YEAR = dayjs().year();

export const CURRENT_MONTH = dayjs().month();

export function getDaysInMonth(year, month) {
  return dayjs(`${year}-${month + 1}-01`).daysInMonth();
}

export function getDayOfWeek(year, month) {
  return dayjs(`${year}-${month + 1}-01`).get("day");
}

export function getMonthName(month, year) {
  return dayjs(`${year}-${month + 1}-01`).format("MMMM YYYY");
}

export function setDayJs(date) {
  return dayjs(date);
}

export function isBetweenDate(currentDate, startDate, endDate) {
  return currentDate.isBetween(startDate, endDate, "date", "[]");
}

export function getStartDate(currentDate, hour, minute) {
  return dayjs(currentDate).set("hour", hour).set("minute", minute);
}
