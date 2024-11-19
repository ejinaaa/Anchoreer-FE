import {
  monthIndexToDisplayNumberMap,
  monthToIndexMap,
} from '../constants/common';
import { DateObject, Month, MonthIndex, WeekdayIndex } from '../types/common';

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

export const getDateObjectsOfMonth = (
  year: number,
  month: Month
): DateObject[] => {
  const dates: DateObject[] = [];

  const startDate = new Date(year, monthToIndexMap[month], 1);
  const endDate = new Date(year, monthToIndexMap[month] + 1, 0);

  const startDayIndex = startDate.getDay();
  const endDayIndex = endDate.getDay();

  startDate.setDate(1 - startDayIndex);

  endDate.setDate(endDate.getDate() + (WeekdayIndex.Saturday - endDayIndex));

  /* -------------------------------------------------------------------------- */

  let _currentDate = new Date(startDate);

  while (_currentDate <= endDate) {
    const monthIndex: MonthIndex = _currentDate.getMonth();

    dates.push({
      year: _currentDate.getFullYear(),
      month: monthIndexToDisplayNumberMap[monthIndex],
      date: _currentDate.getDate(),
    });

    _currentDate.setDate(_currentDate.getDate() + 1);
  }

  return dates;
};

export const isToday = (date: DateObject): boolean => {
  const today = convertToDateObject(new Date());

  return (
    date.year === today.year &&
    date.month === today.month &&
    date.date === today.date
  );
};

export const convertDateStringToDateKey = (
  dateString: string
): `${string}-${string}-${string}` | undefined => {
  const date = new Date(dateString);

  const isInvalidDate = isNaN(date.getTime());
  if (isInvalidDate) return;

  const year = date.getFullYear();

  const monthIndex: MonthIndex = date.getMonth();
  const month = monthIndexToDisplayNumberMap[monthIndex];

  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

export const convertDateObjectToDateKey = (
  date: DateObject
): `${string}-${string}-${string}` => {
  return `${date.year}-${date.month}-${date.date}`;
};
