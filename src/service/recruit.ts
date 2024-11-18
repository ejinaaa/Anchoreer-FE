import { monthIndexToDisplayNumberMap } from '../constants/common';
import { Month, MonthIndex } from '../types/common';

export const convertToDateObject = (
  date: Date
): { year: number; month: Month; date: number } => {
  const monthIndex: MonthIndex = date.getMonth();

  return {
    year: date.getFullYear(),
    month: monthIndexToDisplayNumberMap[monthIndex],
    date: date.getDate(),
  };
};
