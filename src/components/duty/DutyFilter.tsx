import { Flex } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useDutiesQuery } from '../../hooks/duty/useDutiesQuery';
import { Duty } from '../../types/duty';
import { DutyFilterOption } from './DutyFilterOption';

export const DutyFilter = () => {
  /** @todo loading, error 처리 */
  const { data: duties = [] } = useDutiesQuery();

  const topLevelDuties = useMemo(
    () => duties.filter(duty => duty.parent_id === null),
    [duties]
  );

  const parentDutyMap = useMemo(
    () =>
      /** @todo 서비스함수 추출 */
      duties.reduce((acc, duty) => {
        if (duty.parent_id === null) return acc;

        if (!acc[duty.parent_id]) {
          acc[duty.parent_id] = [];
        }

        acc[duty.parent_id].push(duty);

        return acc;
      }, {} as Record<Duty['id'], Duty[]>),
    [duties]
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

  return (
    <Flex
      gap={1}
      rounded={'xl'}
      boxShadow={'md'}
      bg={'blackAlpha.200'}
      overflow={'hidden'}
      w={'full'}
    >
      {/* @todo section layout 컴포넌트로 추출 */}
      {/* @todo width관련해서 좀 더 flexible하게 가져갈 수 있는 방법 없는지 고민해보기 */}
      <Flex flexDir={'column'} gap={3} px={4} py={4} bg={'white'} w={'340px'}>
        {topLevelDuties.map(duty => (
          <DutyFilterOption
            key={duty.id}
            duty={duty}
            hasChildrenFilter={!!parentDutyMap[duty.id]}
            isChecked={selectedDutyIds[0] === duty.id}
            onChange={handleToggleDutySelection}
          />
        ))}
      </Flex>

      {selectedDutyIds.map((parentDutyId, depthIndex) => {
        if (!parentDutyId) return null;

        const childrenDuties = duties.filter(
          duty => duty.parent_id === parentDutyId
        );

        if (childrenDuties.length === 0) return null;

        return (
          <Flex
            key={`filter-level-${depthIndex + 1}`}
            flexDir={'column'}
            gap={3}
            px={4}
            py={4}
            bg={'white'}
            w={'340px'}
          >
            {duties
              .filter(duty => duty.parent_id === parentDutyId)
              .map(duty => (
                <DutyFilterOption
                  key={duty.id}
                  duty={duty}
                  hasChildrenFilter={!!parentDutyMap[duty.id]}
                  isChecked={selectedDutyIds[depthIndex + 1] === duty.id}
                  onChange={handleToggleDutySelection}
                />
              ))}
          </Flex>
        );
      })}
    </Flex>
  );
};
