import { Month, MonthIndex } from '../types/common';

export const ONE_SECOND_IN_MS = 1000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;

export const monthIndexToDisplayNumberMap: Record<MonthIndex, Month> = {
  [MonthIndex.January]: Month.January,
  [MonthIndex.February]: Month.February,
  [MonthIndex.March]: Month.March,
  [MonthIndex.April]: Month.April,
  [MonthIndex.May]: Month.May,
  [MonthIndex.June]: Month.June,
  [MonthIndex.July]: Month.July,
  [MonthIndex.August]: Month.August,
  [MonthIndex.September]: Month.September,
  [MonthIndex.October]: Month.October,
  [MonthIndex.November]: Month.November,
  [MonthIndex.December]: Month.December,
};
