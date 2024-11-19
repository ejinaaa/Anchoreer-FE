import { Box, Flex, Grid } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { weekdaysIndex } from '../../constants/common';
import {
  selectRecruitMapByDate,
  useRecruitsQuery,
} from '../../hooks/recruit/useRecruitsQuery';
import {
  convertDateObjectToDateKey,
  convertDateStringToDateKey,
  convertToDateObject,
  getDateObjectsOfMonth,
  isToday,
} from '../../service/recruit';
import { Month } from '../../types/common';
import { Recruit } from '../../types/recruit';
import { CalendarDateCell } from '../common/CalendarDateCell';
import { CalendarNavigation } from '../common/CalendarNavigation';
import { CalendarWeekdayCell } from '../common/CalendarWeekdayCell';
import { RecruitListItem } from './RecruitListItem';
import { RecruitListLayout } from './RecruitListLayout';

export const RecruitCalendar = () => {
  const { data: recruitMapByDate } = useRecruitsQuery({
    select: selectRecruitMapByDate,
  });

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

  const handleSeeDetail = (recruit: Recruit) => {
    /** @todo open detail (kind of) modal */
    console.log('recruit:', recruit);
  };

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

          {/* @todo recruit list query loading, error 처리 */}
          {datesOfMonth.map((dateObject, itemIndex) => (
            <CalendarDateCell
              key={String(dateObject)}
              date={dateObject.date}
              borderLeftWidth={itemIndex === 0 ? 0 : '1px'}
              isThisMonth={dateObject.month === selectedDate.month}
              isToday={isToday(dateObject)}
            >
              <RecruitListLayout minH={'full'}>
                {recruitMapByDate?.[
                  convertDateObjectToDateKey(dateObject)
                ]?.map(recruit => (
                  <RecruitListItem
                    key={recruit.id}
                    recruit={recruit}
                    onSeeDetail={handleSeeDetail}
                    isStart={
                      convertDateStringToDateKey(recruit.start_time) ===
                      convertDateObjectToDateKey(dateObject)
                    }
                    isEnd={
                      convertDateStringToDateKey(recruit.end_time) ===
                      convertDateObjectToDateKey(dateObject)
                    }
                  />
                ))}
              </RecruitListLayout>
            </CalendarDateCell>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
