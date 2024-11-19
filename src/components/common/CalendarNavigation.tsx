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
    <Flex align={'center'} gap={3}>
      <IconButton
        size={'sm'}
        variant={'ghost'}
        icon={<ChevronLeftIcon fontSize={'md'} />}
        aria-label='go to last month'
        onClick={onLastMonth}
      />

      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        {year}.{month}
      </Text>

      <IconButton
        size={'sm'}
        variant={'ghost'}
        icon={<ChevronRightIcon fontSize={'md'} />}
        aria-label='go to next month'
        onClick={onNextMonth}
      />
    </Flex>
  );
};
