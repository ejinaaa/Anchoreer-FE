import { Flex } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { useDutiesQuery } from '../../hooks/duty/useDutiesQuery';
import { Duty } from '../../types/duty';
import { DutyFilterOption } from './DutyFilterOption';

export const DutyFilter = () => {
  /** @todo loading, error 처리 */
  const { data: duties = [] } = useDutiesQuery();

  const firstDepthDuties = useMemo(
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

  const [selectedDutyIdsInDepthOrder, setSelectedDutyIdsInDepthOrder] =
    useState<Duty['id'][]>([]);

  const handleToggleSelect = useCallback(
    ({
      duty: newDuty,
      isChecked: isSelected,
    }: {
      duty: Duty;
      isChecked: boolean;
    }) => {
      /** @todo 리팩터링 */
      setSelectedDutyIdsInDepthOrder(prev => {
        const isFirstDepthDuty = newDuty.parent_id === null;
        if (isFirstDepthDuty) {
          if (isSelected) {
            return [newDuty.id];
          }
          return [];
        }

        const parentDepthIndex = prev.findIndex(id => id === newDuty.parent_id);
        if (parentDepthIndex === -1) return prev;

        const newDutyDepthIndex = parentDepthIndex + 1;
        const next = [...prev];

        if (isSelected) {
          const isAlreadySelected = prev[newDutyDepthIndex] === newDuty.id;
          if (isAlreadySelected) return prev;

          next[newDutyDepthIndex] = newDuty.id;
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
        {firstDepthDuties.map(duty => (
          <DutyFilterOption
            key={duty.id}
            duty={duty}
            hasChildrenFilter={!!parentDutyMap[duty.id]}
            isChecked={selectedDutyIdsInDepthOrder[0] === duty.id}
            onChange={handleToggleSelect}
          />
        ))}
      </Flex>

      {selectedDutyIdsInDepthOrder.map((parentDutyId, index) => {
        if (!parentDutyId) return null;

        const childrenDuties = duties.filter(
          duty => duty.parent_id === parentDutyId
        );

        if (childrenDuties.length === 0) return null;

        return (
          <Flex
            key={`depth-${index + 1}`}
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
                  isChecked={selectedDutyIdsInDepthOrder[index + 1] === duty.id}
                  onChange={handleToggleSelect}
                />
              ))}
          </Flex>
        );
      })}
    </Flex>
  );
};
