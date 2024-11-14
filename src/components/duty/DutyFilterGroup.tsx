import { Flex } from '@chakra-ui/react';
import { Duty } from '../../types/duty';
import { DutyFilterOption } from './DutyFilterOption';

type DutyFilterGroupProps = {
  duties: Duty[];
  selectedDutyIds: Duty['id'] | Duty['id'][];
  onChange: (params: { duty: Duty; isChecked: boolean }) => void;
  hasChildrenFilter: (dutyId: Duty['id']) => boolean;
};
export const DutyFilterGroup: React.FC<DutyFilterGroupProps> = ({
  duties,
  selectedDutyIds: _selectedDutyIds,
  onChange,
  hasChildrenFilter,
}) => {
  const selectedDutyIds = Array.isArray(_selectedDutyIds)
    ? _selectedDutyIds
    : [_selectedDutyIds];

  if (duties.length === 0) return null;

  return (
    <Flex
      flexDir={'column'}
      gap={3}
      px={4}
      py={4}
      bg={'white'}
      /** @todo width flexible하게 가져갈 수 없는지 고민해보기 */
      w={'340px'}
    >
      {duties.map(duty => (
        <DutyFilterOption
          key={duty.id}
          duty={duty}
          hasChildrenFilter={hasChildrenFilter(duty.id)}
          isChecked={selectedDutyIds.includes(duty.id)}
          onChange={onChange}
        />
      ))}
    </Flex>
  );
};
