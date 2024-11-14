import { ONE_HOUR_IN_MS } from '../constants/common';

export const hourToMilliseconds = (hour: number) => {
  return ONE_HOUR_IN_MS * hour;
};
