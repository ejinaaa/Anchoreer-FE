import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';

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
      <Tooltip
        label={`${year}년 ${month - 1}월`}
        hasArrow
        placement={'top'}
        rounded={'md'}
      >
        <IconButton
          size={'sm'}
          variant={'ghost'}
          icon={<ChevronLeftIcon fontSize={'md'} />}
          aria-label='go to last month'
          onClick={onLastMonth}
        />
      </Tooltip>

      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        {year}.{month}
      </Text>

      <Tooltip
        label={`${year}년 ${month + 1}월`}
        hasArrow
        placement={'top'}
        rounded={'md'}
      >
        <IconButton
          size={'sm'}
          variant={'ghost'}
          icon={<ChevronRightIcon fontSize={'md'} />}
          aria-label='go to next month'
          onClick={onNextMonth}
        />
      </Tooltip>
    </Flex>
  );
};
