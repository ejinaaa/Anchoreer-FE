import { Flex } from '@chakra-ui/react';
import { DutyFilter } from '../components/duty/DutyFilter';
import { RecruitCalendar } from '../components/recruit/RecruitCalendar';

export const Recruit = () => {
  return (
    <Flex>
      <DutyFilter />

      <RecruitCalendar />
    </Flex>
  );
};
