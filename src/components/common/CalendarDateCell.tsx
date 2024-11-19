import { Box, BoxProps, Center } from '@chakra-ui/react';
import React from 'react';

type CalendarDateCellProps = Omit<BoxProps, 'childen'> & {
  date: number;
  isToday?: boolean;
  isThisMonth?: boolean;
  /** cell content */
  children?: React.ReactNode | React.ReactNode[];
};
export const CalendarDateCell: React.FC<CalendarDateCellProps> = ({
  date,
  isToday,
  isThisMonth,
  children,
  ...containerProps
}) => {
  return (
    <Box borderColor={'blackAlpha.400'} {...containerProps}>
      <Center
        flex={'1 1 auto'}
        py={1}
        px={2}
        borderTopWidth={'1px'}
        borderBottomWidth={'1px'}
        borderColor={'blackAlpha.400'}
        color={isThisMonth ? 'gray.800' : 'gray.500'}
        {...(isToday ? { bg: 'blue.100', fontWeight: 'semibold' } : {})}
      >
        {date}
      </Center>

      <Box minH={'100px'} fontSize={'xs'}>
        {children}
      </Box>
    </Box>
  );
};
