import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';

type CalendarNavigationProps = {
  year: number;
  month: number;
  onLastMonth: () => void;
  onNextMonth: () => void;
};
export const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  year,
  month,
  onLastMonth,
  onNextMonth,
}) => {
  return (
    <Flex align={'center'}>
      <IconButton
        size={'md'}
        variant={'ghost'}
        icon={<ChevronLeftIcon />}
        aria-label='go to last month'
        onClick={onLastMonth}
      />

      <Text fontSize={'xl'}>
        {year}.{month}
      </Text>

      <IconButton
        size={'md'}
        variant={'ghost'}
        icon={<ChevronRightIcon />}
        aria-label='go to next month'
        onClick={onNextMonth}
      />
    </Flex>
  );
};
