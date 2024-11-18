import { Center, CenterProps } from '@chakra-ui/react';
import { weekdayIndexToDisplayNameMap } from '../../constants/common';
import { WeekdayIndex } from '../../types/common';

type CalendarWeekdayCellProps = Omit<CenterProps, 'childen'> & {
  dayIndex: WeekdayIndex;
};
export const CalendarWeekdayCell: React.FC<CalendarWeekdayCellProps> = ({
  dayIndex,
  ...containerProps
}) => {
  return (
    <Center
      flex={'1 1 auto'}
      py={1}
      px={2}
      bg={'blackAlpha.50'}
      borderColor={'blackAlpha.400'}
      color={'gray.800'}
      {...containerProps}
    >
      {weekdayIndexToDisplayNameMap[dayIndex]}
    </Center>
  );
};
