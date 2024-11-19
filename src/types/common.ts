/** 0 ~ 6. 0은 일요일, 6은 토요일 */
export enum WeekdayIndex {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

/** 0 ~ 11. 0은 1월, 11은 12월 */
export enum MonthIndex {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export type DateObject = {
  year: number;
  month: Month;
  date: number;
};

export type DateKey = `${number}-${number}-${number}`;
