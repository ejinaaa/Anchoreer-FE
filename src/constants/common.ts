import { Month, MonthIndex, WeekdayIndex } from '../types/common';

export const ONE_SECOND_IN_MS = 1000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;

export const weekdaysIndex: WeekdayIndex[] = [
  WeekdayIndex.Sunday,
  WeekdayIndex.Monday,
  WeekdayIndex.Tuesday,
  WeekdayIndex.Wednesday,
  WeekdayIndex.Thursday,
  WeekdayIndex.Friday,
  WeekdayIndex.Saturday,
];

export const weekdayIndexToDisplayNameMap: Record<WeekdayIndex, string> = {
  [WeekdayIndex.Sunday]: 'SUN',
  [WeekdayIndex.Monday]: 'MON',
  [WeekdayIndex.Tuesday]: 'TUE',
  [WeekdayIndex.Wednesday]: 'WED',
  [WeekdayIndex.Thursday]: 'THU',
  [WeekdayIndex.Friday]: 'FRI',
  [WeekdayIndex.Saturday]: 'SAT',
};

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

export const monthToIndexMap: Record<Month, MonthIndex> = {
  [Month.January]: MonthIndex.January,
  [Month.February]: MonthIndex.February,
  [Month.March]: MonthIndex.March,
  [Month.April]: MonthIndex.April,
  [Month.May]: MonthIndex.May,
  [Month.June]: MonthIndex.June,
  [Month.July]: MonthIndex.July,
  [Month.August]: MonthIndex.August,
  [Month.September]: MonthIndex.September,
  [Month.October]: MonthIndex.October,
  [Month.November]: MonthIndex.November,
  [Month.December]: MonthIndex.December,
};
