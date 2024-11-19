import { Center } from '@chakra-ui/react';

export const EndMark = () => {
  return (
    <Center
      w={4}
      h={4}
      rounded={'4px'}
      fontSize={'12px'}
      bg={'blackAlpha.700'}
      color={'white'}
      flexShrink={0}
    >
      끝
    </Center>
  );
};
