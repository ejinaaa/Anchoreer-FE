import { Flex, Text, Tooltip } from '@chakra-ui/react';
import { Recruit } from '../../types/recruit';
import { EndMark } from './EndMark';
import { StartMark } from './StartMark';

type RecruitListItemProps = {
  recruit: Recruit;
  onSeeDetail: (recruit: Recruit) => void;
  isStart?: boolean;
  isEnd?: boolean;
};
export const RecruitListItem: React.FC<RecruitListItemProps> = ({
  recruit,
  onSeeDetail,
  isStart,
  isEnd,
}) => {
  const handleClick = () => {
    onSeeDetail(recruit);
  };

  return (
    <Tooltip label={recruit.title} hasArrow placement='top' rounded={'md'}>
      <Flex
        align={'center'}
        py={0.5}
        px={1}
        gap={1}
        borderBottomWidth={'1px'}
        borderRadius={'sm'}
        borderColor={'gray.100'}
        cursor={'pointer'}
        onClick={handleClick}
      >
        {isStart && <StartMark />}
        {isEnd && <EndMark />}

        <Text>{recruit.company_name}</Text>
      </Flex>
    </Tooltip>
  );
};
