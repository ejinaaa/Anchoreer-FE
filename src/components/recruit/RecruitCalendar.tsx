import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecruitsQuery } from '../../hooks/recruit/useRecruitsQuery';
import { convertToDateObject } from '../../service/recruit';
import { Month } from '../../types/common';
import { CalendarNavigation } from '../common/CalendarNavigation';

export const RecruitCalendar = () => {
  const { data: recruits } = useRecruitsQuery();

  useEffect(() => {
    console.log('recruits: ', recruits);
  }, [recruits]);

  /* -------------------------------------------------------------------------- */

  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: Month;
  }>(convertToDateObject(new Date()));

  const handleMoveToLastMonth = () => {
    setSelectedDate(prev => {
      const lastMonth = prev.month - 1;
      const isYearDecrementNeeded = lastMonth < Month.January;
      return {
        year: isYearDecrementNeeded ? prev.year - 1 : prev.year,
        month: isYearDecrementNeeded ? Month.December : lastMonth,
      };
    });
  };

  const handleMoveToNextMonth = () => {
    setSelectedDate(prev => {
      const nextMonth = prev.month + 1;
      const isYearIncrementNeeded = nextMonth > Month.December;
      return {
        year: isYearIncrementNeeded ? prev.year + 1 : prev.year,
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
