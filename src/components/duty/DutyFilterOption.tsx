import { Checkbox, Flex } from '@chakra-ui/react';
import React from 'react';
import { Duty } from '../../types/duty';
import { ChevronRightIcon } from '@chakra-ui/icons';

type DutyFilterOptionProps = {
  duty: Duty;
  isChecked: boolean;
  onChange: (params: { duty: Duty; isChecked: boolean }) => void;
  hasChildrenFilter?: boolean;
};
export const DutyFilterOption: React.FC<DutyFilterOptionProps> = ({
  duty,
  isChecked,
  hasChildrenFilter,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ duty, isChecked: e.target.checked });
  };

  return (
    <Checkbox
      type={'radio'}
      w={'full'}
      isChecked={isChecked}
      onChange={handleChange}
    >
      <Flex
        as={'span'}
        flex={'1 1 auto'}
        align={'center'}
        justify={'space-between'}
      >
        {duty.name}
        {hasChildrenFilter && <ChevronRightIcon />}
      </Flex>
    </Checkbox>
  );
};
