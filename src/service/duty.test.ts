import { updateSelectedDutyIds } from './duty';

describe('DutyService', () => {
  describe('updateSelectedDutyIds', () => {
    it('should add newDutyId to selected duty ids', () => {
      const selectedDutyIds = [1, 2, 3];
      const newDutyId = 4;
      const newDutyLevel = 3;
      const isSelected = true;

      const updatedIds = updateSelectedDutyIds({
        selectedDutyIds,
        newDutyId,
        newDutyLevel,
        isSelected,
      });

      expect(updatedIds).toEqual([1, 2, 3, 4]);
    });

    it('should remove newDutyId from selected duty ids', () => {
      const selectedDutyIds = [1, 2, 3, 4];
      const newDutyId = 4;
      const newDutyLevel = 3;
      const isSelected = false;

      const updatedIds = updateSelectedDutyIds({
        selectedDutyIds,
        newDutyId,
        newDutyLevel,
        isSelected,
      });

      expect(updatedIds).toEqual([1, 2, 3]);
    });

    it('should not update selected duty ids if newDutyId is already selected', () => {
      const selectedDutyIds = [1, 2, 3, 4];
      const newDutyId = 4;
      const newDutyLevel = 3;
      const isSelected = true;

      const updatedIds = updateSelectedDutyIds({
        selectedDutyIds,
        newDutyId,
        newDutyLevel,
        isSelected,
      });

      expect(updatedIds).toEqual([1, 2, 3, 4]);
    });

    it('should not update selected duty ids if newDutyId is not selected', () => {
      const selectedDutyIds = [1, 2, 3];
      const newDutyId = 4;
      const newDutyLevel = 3;
      const isSelected = false;

      const updatedIds = updateSelectedDutyIds({
        selectedDutyIds,
        newDutyId,
        newDutyLevel,
        isSelected,
      });

      expect(updatedIds).toEqual([1, 2, 3]);
    });

    it('should remove all selected duty ids after newDutyLevel', () => {
      const selectedDutyIds = [1, 2, 3, 4, 5];
      const newDutyId = 4;
      const newDutyLevel = 2;
      const isSelected = true;

      const updatedIds = updateSelectedDutyIds({
        selectedDutyIds,
        newDutyId,
        newDutyLevel,
        isSelected,
      });

      expect(updatedIds).toEqual([1, 2, 4]);
    });
  });
});
