import { DateObject, Month } from '../types/common';
import { getDateObjectsOfMonth } from './recruit';

describe('Recruit Service', () => {
  describe('getDateObjectsOfMonth', () => {
    it('should return correct date objects for November 2024 starting from sunday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.October, date: 27 },
        { year: 2024, month: Month.October, date: 28 },
        { year: 2024, month: Month.October, date: 29 },
        { year: 2024, month: Month.October, date: 30 },
        { year: 2024, month: Month.October, date: 31 },
        { year: 2024, month: Month.November, date: 1 },
        { year: 2024, month: Month.November, date: 2 },
        { year: 2024, month: Month.November, date: 3 },
        { year: 2024, month: Month.November, date: 4 },
        { year: 2024, month: Month.November, date: 5 },
        { year: 2024, month: Month.November, date: 6 },
        { year: 2024, month: Month.November, date: 7 },
        { year: 2024, month: Month.November, date: 8 },
        { year: 2024, month: Month.November, date: 9 },
        { year: 2024, month: Month.November, date: 10 },
        { year: 2024, month: Month.November, date: 11 },
        { year: 2024, month: Month.November, date: 12 },
        { year: 2024, month: Month.November, date: 13 },
        { year: 2024, month: Month.November, date: 14 },
        { year: 2024, month: Month.November, date: 15 },
        { year: 2024, month: Month.November, date: 16 },
        { year: 2024, month: Month.November, date: 17 },
        { year: 2024, month: Month.November, date: 18 },
        { year: 2024, month: Month.November, date: 19 },
        { year: 2024, month: Month.November, date: 20 },
        { year: 2024, month: Month.November, date: 21 },
        { year: 2024, month: Month.November, date: 22 },
        { year: 2024, month: Month.November, date: 23 },
        { year: 2024, month: Month.November, date: 24 },
        { year: 2024, month: Month.November, date: 25 },
        { year: 2024, month: Month.November, date: 26 },
        { year: 2024, month: Month.November, date: 27 },
        { year: 2024, month: Month.November, date: 28 },
        { year: 2024, month: Month.November, date: 29 },
        { year: 2024, month: Month.November, date: 30 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.November);
      expect(result).toEqual(expected);
    });

    it('should return correct date objects for October 2024 starting from sunday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.September, date: 29 },
        { year: 2024, month: Month.September, date: 30 },
        { year: 2024, month: Month.October, date: 1 },
        { year: 2024, month: Month.October, date: 2 },
        { year: 2024, month: Month.October, date: 3 },
        { year: 2024, month: Month.October, date: 4 },
        { year: 2024, month: Month.October, date: 5 },
        { year: 2024, month: Month.October, date: 6 },
        { year: 2024, month: Month.October, date: 7 },
        { year: 2024, month: Month.October, date: 8 },
        { year: 2024, month: Month.October, date: 9 },
        { year: 2024, month: Month.October, date: 10 },
        { year: 2024, month: Month.October, date: 11 },
        { year: 2024, month: Month.October, date: 12 },
        { year: 2024, month: Month.October, date: 13 },
        { year: 2024, month: Month.October, date: 14 },
        { year: 2024, month: Month.October, date: 15 },
        { year: 2024, month: Month.October, date: 16 },
        { year: 2024, month: Month.October, date: 17 },
        { year: 2024, month: Month.October, date: 18 },
        { year: 2024, month: Month.October, date: 19 },
        { year: 2024, month: Month.October, date: 20 },
        { year: 2024, month: Month.October, date: 21 },
        { year: 2024, month: Month.October, date: 22 },
        { year: 2024, month: Month.October, date: 23 },
        { year: 2024, month: Month.October, date: 24 },
        { year: 2024, month: Month.October, date: 25 },
        { year: 2024, month: Month.October, date: 26 },
        { year: 2024, month: Month.October, date: 27 },
        { year: 2024, month: Month.October, date: 28 },
        { year: 2024, month: Month.October, date: 29 },
        { year: 2024, month: Month.October, date: 30 },
        { year: 2024, month: Month.October, date: 31 },
        { year: 2024, month: Month.November, date: 1 },
        { year: 2024, month: Month.November, date: 2 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.October);
      expect(result).toEqual(expected);
    });

    it('should return correct date objects for December 2024 starting from sunday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.December, date: 1 },
        { year: 2024, month: Month.December, date: 2 },
        { year: 2024, month: Month.December, date: 3 },
        { year: 2024, month: Month.December, date: 4 },
        { year: 2024, month: Month.December, date: 5 },
        { year: 2024, month: Month.December, date: 6 },
        { year: 2024, month: Month.December, date: 7 },
        { year: 2024, month: Month.December, date: 8 },
        { year: 2024, month: Month.December, date: 9 },
        { year: 2024, month: Month.December, date: 10 },
        { year: 2024, month: Month.December, date: 11 },
        { year: 2024, month: Month.December, date: 12 },
        { year: 2024, month: Month.December, date: 13 },
        { year: 2024, month: Month.December, date: 14 },
        { year: 2024, month: Month.December, date: 15 },
        { year: 2024, month: Month.December, date: 16 },
        { year: 2024, month: Month.December, date: 17 },
        { year: 2024, month: Month.December, date: 18 },
        { year: 2024, month: Month.December, date: 19 },
        { year: 2024, month: Month.December, date: 20 },
        { year: 2024, month: Month.December, date: 21 },
        { year: 2024, month: Month.December, date: 22 },
        { year: 2024, month: Month.December, date: 23 },
        { year: 2024, month: Month.December, date: 24 },
        { year: 2024, month: Month.December, date: 25 },
        { year: 2024, month: Month.December, date: 26 },
        { year: 2024, month: Month.December, date: 27 },
        { year: 2024, month: Month.December, date: 28 },
        { year: 2024, month: Month.December, date: 29 },
        { year: 2024, month: Month.December, date: 30 },
        { year: 2024, month: Month.December, date: 31 },
        { year: 2025, month: Month.January, date: 1 },
        { year: 2025, month: Month.January, date: 2 },
        { year: 2025, month: Month.January, date: 3 },
        { year: 2025, month: Month.January, date: 4 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.December);
      expect(result).toEqual(expected);
    });

    it('should return correct date objects for November 2024 starting from monday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.October, date: 28 },
        { year: 2024, month: Month.October, date: 29 },
        { year: 2024, month: Month.October, date: 30 },
        { year: 2024, month: Month.October, date: 31 },
        { year: 2024, month: Month.November, date: 1 },
        { year: 2024, month: Month.November, date: 2 },
        { year: 2024, month: Month.November, date: 3 },
        { year: 2024, month: Month.November, date: 4 },
        { year: 2024, month: Month.November, date: 5 },
        { year: 2024, month: Month.November, date: 6 },
        { year: 2024, month: Month.November, date: 7 },
        { year: 2024, month: Month.November, date: 8 },
        { year: 2024, month: Month.November, date: 9 },
        { year: 2024, month: Month.November, date: 10 },
        { year: 2024, month: Month.November, date: 11 },
        { year: 2024, month: Month.November, date: 12 },
        { year: 2024, month: Month.November, date: 13 },
        { year: 2024, month: Month.November, date: 14 },
        { year: 2024, month: Month.November, date: 15 },
        { year: 2024, month: Month.November, date: 16 },
        { year: 2024, month: Month.November, date: 17 },
        { year: 2024, month: Month.November, date: 18 },
        { year: 2024, month: Month.November, date: 19 },
        { year: 2024, month: Month.November, date: 20 },
        { year: 2024, month: Month.November, date: 21 },
        { year: 2024, month: Month.November, date: 22 },
        { year: 2024, month: Month.November, date: 23 },
        { year: 2024, month: Month.November, date: 24 },
        { year: 2024, month: Month.November, date: 25 },
        { year: 2024, month: Month.November, date: 26 },
        { year: 2024, month: Month.November, date: 27 },
        { year: 2024, month: Month.November, date: 28 },
        { year: 2024, month: Month.November, date: 29 },
        { year: 2024, month: Month.November, date: 30 },
        { year: 2024, month: Month.December, date: 1 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.November, {
        startFromSunday: false,
      });
      expect(result).toEqual(expected);
    });

    it('should return correct date objects for October 2024 starting from monday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.September, date: 30 },
        { year: 2024, month: Month.October, date: 1 },
        { year: 2024, month: Month.October, date: 2 },
        { year: 2024, month: Month.October, date: 3 },
        { year: 2024, month: Month.October, date: 4 },
        { year: 2024, month: Month.October, date: 5 },
        { year: 2024, month: Month.October, date: 6 },
        { year: 2024, month: Month.October, date: 7 },
        { year: 2024, month: Month.October, date: 8 },
        { year: 2024, month: Month.October, date: 9 },
        { year: 2024, month: Month.October, date: 10 },
        { year: 2024, month: Month.October, date: 11 },
        { year: 2024, month: Month.October, date: 12 },
        { year: 2024, month: Month.October, date: 13 },
        { year: 2024, month: Month.October, date: 14 },
        { year: 2024, month: Month.October, date: 15 },
        { year: 2024, month: Month.October, date: 16 },
        { year: 2024, month: Month.October, date: 17 },
        { year: 2024, month: Month.October, date: 18 },
        { year: 2024, month: Month.October, date: 19 },
        { year: 2024, month: Month.October, date: 20 },
        { year: 2024, month: Month.October, date: 21 },
        { year: 2024, month: Month.October, date: 22 },
        { year: 2024, month: Month.October, date: 23 },
        { year: 2024, month: Month.October, date: 24 },
        { year: 2024, month: Month.October, date: 25 },
        { year: 2024, month: Month.October, date: 26 },
        { year: 2024, month: Month.October, date: 27 },
        { year: 2024, month: Month.October, date: 28 },
        { year: 2024, month: Month.October, date: 29 },
        { year: 2024, month: Month.October, date: 30 },
        { year: 2024, month: Month.October, date: 31 },
        { year: 2024, month: Month.November, date: 1 },
        { year: 2024, month: Month.November, date: 2 },
        { year: 2024, month: Month.November, date: 3 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.October, {
        startFromSunday: false,
      });
      expect(result).toEqual(expected);
    });

    it('should return correct date objects for December 2024 starting from monday', () => {
      const expected: DateObject[] = [
        { year: 2024, month: Month.November, date: 25 },
        { year: 2024, month: Month.November, date: 26 },
        { year: 2024, month: Month.November, date: 27 },
        { year: 2024, month: Month.November, date: 28 },
        { year: 2024, month: Month.November, date: 29 },
        { year: 2024, month: Month.November, date: 30 },
        { year: 2024, month: Month.December, date: 1 },
        { year: 2024, month: Month.December, date: 2 },
        { year: 2024, month: Month.December, date: 3 },
        { year: 2024, month: Month.December, date: 4 },
        { year: 2024, month: Month.December, date: 5 },
        { year: 2024, month: Month.December, date: 6 },
        { year: 2024, month: Month.December, date: 7 },
        { year: 2024, month: Month.December, date: 8 },
        { year: 2024, month: Month.December, date: 9 },
        { year: 2024, month: Month.December, date: 10 },
        { year: 2024, month: Month.December, date: 11 },
        { year: 2024, month: Month.December, date: 12 },
        { year: 2024, month: Month.December, date: 13 },
        { year: 2024, month: Month.December, date: 14 },
        { year: 2024, month: Month.December, date: 15 },
        { year: 2024, month: Month.December, date: 16 },
        { year: 2024, month: Month.December, date: 17 },
        { year: 2024, month: Month.December, date: 18 },
        { year: 2024, month: Month.December, date: 19 },
        { year: 2024, month: Month.December, date: 20 },
        { year: 2024, month: Month.December, date: 21 },
        { year: 2024, month: Month.December, date: 22 },
        { year: 2024, month: Month.December, date: 23 },
        { year: 2024, month: Month.December, date: 24 },
        { year: 2024, month: Month.December, date: 25 },
        { year: 2024, month: Month.December, date: 26 },
        { year: 2024, month: Month.December, date: 27 },
        { year: 2024, month: Month.December, date: 28 },
        { year: 2024, month: Month.December, date: 29 },
        { year: 2024, month: Month.December, date: 30 },
        { year: 2024, month: Month.December, date: 31 },
        { year: 2025, month: Month.January, date: 1 },
        { year: 2025, month: Month.January, date: 2 },
        { year: 2025, month: Month.January, date: 3 },
        { year: 2025, month: Month.January, date: 4 },
        { year: 2025, month: Month.January, date: 5 },
      ];

      const result = getDateObjectsOfMonth(2024, Month.December, {
        startFromSunday: false,
      });
      expect(result).toEqual(expected);
    });
  });
});