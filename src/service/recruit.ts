import { monthIndexToDisplayNumberMap } from '../constants/common';
import { Month, MonthIndex } from '../types/common';

export const convertToDateObject = (
  date: Date
): { year: number; month: Month } => {
  const monthIndex: MonthIndex = date.getMonth();

  return {
    year: date.getFullYear(),
    month: monthIndexToDisplayNumberMap[monthIndex],
  };
};
