import { Flex } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useDutiesQuery } from '../../hooks/duty/useDutiesQuery';
import { Duty } from '../../types/duty';
import { DutyFilterGroup } from './DutyFilterGroup';

export const DutyFilter = () => {
  /** @todo loading, error 처리 */
  const { data: allDuties = [] } = useDutiesQuery();

  const topLevelDuties = useMemo(
    () => allDuties.filter(duty => duty.parent_id === null),
    [allDuties]
  );

  /** 특정 duty에 대한 하위 duty를 조회할 수 있습니다 */
  const dutyChildrenMap = useMemo(
    () =>
      /** @todo 서비스함수 추출 */
      allDuties.reduce((acc, duty) => {
        if (duty.parent_id === null) return acc;

        if (!acc[duty.parent_id]) {
          acc[duty.parent_id] = [];
        }

        acc[duty.parent_id].push(duty);

        return acc;
      }, {} as Record<Duty['id'], Duty[]>),
    [allDuties]
  );

  /* -------------------------------------------------------------------------- */

  /** index는 filter의 level/depth를 의미합니다 */
  const [selectedDutyIds, setSelectedDutyIds] = useState<Duty['id'][]>([]);

  const handleToggleDutySelection = useCallback(
    ({
      duty: newSelectedDuty,
      isChecked: isSelected,
    }: {
      duty: Duty;
      isChecked: boolean;
    }) => {
      /** @todo 리팩터링 */
      setSelectedDutyIds(prev => {
        const isTopLevelDuty = newSelectedDuty.parent_id === null;
        if (isTopLevelDuty) {
          if (isSelected) {
            return [newSelectedDuty.id];
          }
          return [];
        }

        const parentIndex = prev.findIndex(
          id => id === newSelectedDuty.parent_id
        );
        if (parentIndex === -1) return prev;

        const newDutyDepthIndex = parentIndex + 1;
        const next = [...prev];

        if (isSelected) {
          const isAlreadySelected =
            prev[newDutyDepthIndex] === newSelectedDuty.id;
          if (isAlreadySelected) return prev;

          next[newDutyDepthIndex] = newSelectedDuty.id;
        } else {
          next.splice(newDutyDepthIndex);
        }

        return next;
      });
    },
    []
  );

  /* -------------------------------------------------------------------------- */

  const hasChildrenFilter = useCallback(
    (dutyId: Duty['id']) => !!dutyChildrenMap[dutyId],
    [dutyChildrenMap]
  );

  return (
    <Flex
      gap={1}
      rounded={'xl'}
      boxShadow={'md'}
      bg={'blackAlpha.200'}
      overflow={'hidden'}
      w={'full'}
    >
      <DutyFilterGroup
        duties={topLevelDuties}
        selectedDutyIds={selectedDutyIds[0]}
        onChange={handleToggleDutySelection}
        hasChildrenFilter={hasChildrenFilter}
      />

      {selectedDutyIds.map((parentDutyId, parentLevelIndex) => {
        if (!parentDutyId) return null;

        const groupedDuties = allDuties.filter(
          duty => duty.parent_id === parentDutyId
        );

        return (
          <DutyFilterGroup
            key={`filter-level-${parentLevelIndex + 1}`}
            duties={groupedDuties}
            selectedDutyIds={selectedDutyIds[parentLevelIndex + 1]}
            onChange={handleToggleDutySelection}
            hasChildrenFilter={hasChildrenFilter}
          />
        );
      })}
    </Flex>
  );
};
