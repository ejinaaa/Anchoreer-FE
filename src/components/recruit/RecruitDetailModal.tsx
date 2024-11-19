import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { formatDateStringForDisplay } from '../../service/recruit';
import { Recruit } from '../../types/recruit';

type RecruitDetailModalProps = {
  recruit: Recruit;
  onPrevRecruit: () => void;
  onNextRecruit: () => void;
  hasPrevRecruit?: boolean;
  hasNextRecruit?: boolean;
  onClose: () => void;
};
export const RecruitDetailModal: React.FC<RecruitDetailModalProps> = ({
  recruit,
  onPrevRecruit,
  onNextRecruit,
  hasPrevRecruit,
  hasNextRecruit,
  onClose,
}) => {
  const startDate = formatDateStringForDisplay(recruit.start_time);
  const endDate = formatDateStringForDisplay(recruit.end_time);
  const hasAnyDate = startDate || endDate;

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={'750px'}>
        <ModalHeader>
          <Flex flexDir={'column'}>
            <Text fontSize={'md'}>{recruit.company_name}</Text>
            <Text fontSize={'xl'} fontWeight={'semibold'}>
              {recruit.title}
            </Text>
            {hasAnyDate && (
              <Text fontSize={'sm'} color={'blackAlpha.500'}>
                {startDate} ~ {endDate}
              </Text>
            )}
          </Flex>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Image
            src={recruit.image_url}
            alt={`${recruit.company_name} 기업의 ${recruit.title} 공고에 대한 내용`}
          />
        </ModalBody>

        <Button
          variant={'unstyled'}
          role={'group'}
          pos={'fixed'}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          gap={2}
          left={10}
          top={'50%'}
          transform={'translateY(-50%)'}
          color={'white'}
          onClick={onPrevRecruit}
        >
          <ChevronLeftIcon
            w={10}
            h={10}
            rounded={'full'}
            bg={'white'}
            _groupHover={{ bg: 'blue.500', color: 'white' }}
            color={'black'}
          />

          <Text as={'span'} fontSize={'sm'}>
            이전 공고 보기
          </Text>
        </Button>

        <Button
          variant={'unstyled'}
          role={'group'}
          pos={'fixed'}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          gap={2}
          right={10}
          top={'50%'}
          transform={'translateY(-50%)'}
          color={'white'}
          onClick={onNextRecruit}
        >
          <ChevronRightIcon
            w={10}
            h={10}
            rounded={'full'}
            bg={'white'}
            _groupHover={{ bg: 'blue.500', color: 'white' }}
            color={'black'}
          />
          이전 공고 보기
        </Button>
      </ModalContent>
    </Modal>
  );
};
