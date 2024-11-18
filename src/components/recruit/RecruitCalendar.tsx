import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useRecruitsQuery } from '../../hooks/recruit/useRecruitsQuery';
import { convertToDateObject } from '../../service/recruit';
import { Month } from '../../types/common';
import { CalendarNavigation } from '../common/CalendarNavigation';

export const RecruitCalendar = () => {
  const { data: recruits } = useRecruitsQuery();

  /* -------------------------------------------------------------------------- */

  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: Month;
    date: number;
  }>(convertToDateObject(new Date()));

  const handleMoveToLastMonth = () => {
    setSelectedDate(prevState => {
      const lastMonth = prevState.month - 1;
      const isYearDecrementNeeded = lastMonth < Month.January;
      return {
        ...prevState,
        year: isYearDecrementNeeded ? prevState.year - 1 : prevState.year,
        month: isYearDecrementNeeded ? Month.December : lastMonth,
      };
    });
  };

  const handleMoveToNextMonth = () => {
    setSelectedDate(prevState => {
      const nextMonth = prevState.month + 1;
      const isYearIncrementNeeded = nextMonth > Month.December;
      return {
        ...prevState,
        year: isYearIncrementNeeded ? prevState.year + 1 : prevState.year,
        month: isYearIncrementNeeded ? Month.January : nextMonth,
      };
    });
  };

  return (
    <Box>
      <CalendarNavigation
        year={selectedDate.year}
        month={selectedDate.month}
        onLastMonth={handleMoveToLastMonth}
        onNextMonth={handleMoveToNextMonth}
      />
    </Box>
  );
};
