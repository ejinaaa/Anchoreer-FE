import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

type RecruitListLayoutProps = FlexProps;
export const RecruitListLayout: React.FC<RecruitListLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex flexDir={'column'} {...props}>
      {children}
    </Flex>
  );
};
