import { Duty } from '../types/duty';

/**
 * @description newDutyId를 selectedDutyIds에 추가하거나 제거합니다.
 * @returns 업데이트된 selectedDutyIds
 */
export const updateSelectedDutyIds = ({
  selectedDutyIds,
  newDutyId,
  newDutyLevel,
  isSelected,
}: {
  selectedDutyIds: Duty['id'][];
  newDutyId: Duty['id'];
  newDutyLevel: number;
  isSelected: boolean;
}) => {
  const updatedIds = [...selectedDutyIds];

  updatedIds.splice(newDutyLevel);

  if (isSelected) {
    updatedIds[newDutyLevel] = newDutyId;
  }

  return updatedIds;
};
