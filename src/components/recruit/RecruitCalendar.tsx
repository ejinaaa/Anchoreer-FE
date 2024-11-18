import { Box, Flex, Grid } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { weekdaysIndex } from '../../constants/common';
import { useRecruitsQuery } from '../../hooks/recruit/useRecruitsQuery';
import {
  convertToDateObject,
  getDateObjectsOfMonth,
  isToday,
} from '../../service/recruit';
import { Month } from '../../types/common';
import { CalendarDateCell } from '../common/CalendarDateCell';
import { CalendarNavigation } from '../common/CalendarNavigation';
import { CalendarWeekdayCell } from '../common/CalendarWeekdayCell';

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

  /* -------------------------------------------------------------------------- */

  const datesOfMonth = useMemo(
    () => getDateObjectsOfMonth(selectedDate.year, selectedDate.month),
    [selectedDate]
  );

  return (
    <Flex flexDir={'column'} align={'center'} gap={8} p={10}>
      <CalendarNavigation
        year={selectedDate.year}
        month={selectedDate.month}
        onLastMonth={handleMoveToLastMonth}
        onNextMonth={handleMoveToNextMonth}
      />

      <Box w={'full'}>
        <Grid
          templateColumns={`repeat(${weekdaysIndex.length}, 1fr)`}
          border={'1px solid'}
          borderColor={'blackAlpha.400'}
        >
          {weekdaysIndex.map((dayIndex, itemIndex) => (
            <CalendarWeekdayCell
              key={dayIndex}
              dayIndex={dayIndex}
              borderLeftWidth={itemIndex === 0 ? 0 : '1px'}
            />
          ))}

          {datesOfMonth.map((dateObject, itemIndex) => (
            <CalendarDateCell
              key={String(dateObject)}
              date={dateObject.date}
              borderLeftWidth={itemIndex === 0 ? 0 : '1px'}
              isThisMonth={dateObject.month === selectedDate.month}
              isToday={isToday(dateObject)}
            >
              {/* @todo recruit list */}
            </CalendarDateCell>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
