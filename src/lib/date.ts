import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

// Extend once, centrally
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(duration);
dayjs.extend(relativeTime);

export const formatDate = (date: dayjs.ConfigType) => {
  return dayjs(date).format("DD.MM.YYYY");
};

export const sortByDateDescending = (
  a: dayjs.ConfigType,
  b: dayjs.ConfigType,
): number => (dayjs(a).isSameOrAfter(dayjs(b), "day") ? -1 : 1);
