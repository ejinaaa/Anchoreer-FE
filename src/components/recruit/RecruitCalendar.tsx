import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { weekdaysIndex } from '../../constants/common';
import {
  selectRecruitMapByDate,
  useRecruitsQuery,
} from '../../hooks/recruit/useRecruitsQuery';
import {
  convertDateObjectToDateKey,
  convertDateStringToDateKey,
  convertToDateObject,
  formatDateStringForDisplay,
  getDateObjectsOfMonth,
  isToday,
} from '../../service/recruit';
import { Month } from '../../types/common';
import { Recruit } from '../../types/recruit';
import { CalendarDateCell } from '../common/CalendarDateCell';
import { CalendarNavigation } from '../common/CalendarNavigation';
import { CalendarWeekdayCell } from '../common/CalendarWeekdayCell';
import { RecruitListItem } from './RecruitListItem';
import { RecruitListLayout } from './RecruitListLayout';

export const RecruitCalendar = () => {
  const { data: recruitMapByDate } = useRecruitsQuery({
    select: selectRecruitMapByDate,
  });

  /* -------------------------------------------------------------------------- */

  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: Month;
    date: number;
  }>(convertToDateObject(new Date()));

  const handleMoveToLastMonth = () => {
    setSelectedDate(prevState => {
      const lastMonth = prevState.month - 1;
      const isYearDecrementNeeded = lastMonth < Month.January;
      return {
        ...prevState,
        year: isYearDecrementNeeded ? prevState.year - 1 : prevState.year,
        month: isYearDecrementNeeded ? Month.December : lastMonth,
      };
    });
  };

  const handleMoveToNextMonth = () => {
    setSelectedDate(prevState => {
      const nextMonth = prevState.month + 1;
      const isYearIncrementNeeded = nextMonth > Month.December;
      return {
        ...prevState,
        year: isYearIncrementNeeded ? prevState.year + 1 : prevState.year,
        month: isYearIncrementNeeded ? Month.January : nextMonth,
      };
    });
  };

  /* -------------------------------------------------------------------------- */

  const datesOfMonth = useMemo(
    () => getDateObjectsOfMonth(selectedDate.year, selectedDate.month),
    [selectedDate]
  );

  /* -------------------------------------------------------------------------- */

  const [selectedRecruit, setSelectedRecruit] = useState<Recruit | null>(null);

  const handleSeeRecruitDetail = (recruit: Recruit) => {
    /** @todo open detail (kind of) modal */
    console.log('recruit:', recruit);
    setSelectedRecruit(recruit);
  };

  const handleCloseRecruitDetail = () => {
    setSelectedRecruit(null);
  };

  const handleSeePrevRecruitDetail = () => {
    /** @todo open previous recruit detail */
  };

  const handleSeeNextRecruitDetail = () => {
    /** @todo open next recruit detail */
  };

  return (
    <>
      <Flex flexDir={'column'} align={'center'} gap={8} p={10}>
        <CalendarNavigation
          year={selectedDate.year}
          month={selectedDate.month}
          onLastMonth={handleMoveToLastMonth}
          onNextMonth={handleMoveToNextMonth}
        />

        <Box w={'full'}>
          <Grid
            templateColumns={`repeat(${weekdaysIndex.length}, 1fr)`}
            border={'1px solid'}
            borderColor={'blackAlpha.400'}
          >
            {weekdaysIndex.map((dayIndex, itemIndex) => (
              <CalendarWeekdayCell
                key={dayIndex}
                dayIndex={dayIndex}
                borderLeftWidth={itemIndex === 0 ? 0 : '1px'}
              />
            ))}

            {/* @todo recruit list query loading, error 처리 */}
            {datesOfMonth.map((dateObject, itemIndex) => (
              <CalendarDateCell
                key={String(dateObject)}
                date={dateObject.date}
                borderLeftWidth={itemIndex === 0 ? 0 : '1px'}
                isThisMonth={dateObject.month === selectedDate.month}
                isToday={isToday(dateObject)}
              >
                <RecruitListLayout minH={'full'}>
                  {recruitMapByDate?.[
                    convertDateObjectToDateKey(dateObject)
                  ]?.map(recruit => (
                    <RecruitListItem
                      key={recruit.id}
                      recruit={recruit}
                      onSeeDetail={handleSeeRecruitDetail}
                      isStart={
                        convertDateStringToDateKey(recruit.start_time) ===
                        convertDateObjectToDateKey(dateObject)
                      }
                      isEnd={
                        convertDateStringToDateKey(recruit.end_time) ===
                        convertDateObjectToDateKey(dateObject)
                      }
                    />
                  ))}
                </RecruitListLayout>
              </CalendarDateCell>
            ))}
          </Grid>
        </Box>
      </Flex>

      {selectedRecruit && (
        <RecruitDetailModal
          recruit={selectedRecruit}
          onPrevRecruit={handleSeePrevRecruitDetail}
          onNextRecruit={handleSeeNextRecruitDetail}
          /** @todo 조건 추가하기 */
          hasPrevRecruit={false}
          hasNextRecruit={false}
          onClose={handleCloseRecruitDetail}
        />
      )}
    </>
  );
};

type RecruitDetailModalProps = {
  recruit: Recruit;
  onPrevRecruit: () => void;
  onNextRecruit: () => void;
  hasPrevRecruit?: boolean;
  hasNextRecruit?: boolean;
  onClose: () => void;
};
const RecruitDetailModal: React.FC<RecruitDetailModalProps> = ({
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
              <Text fontSize={'xs'} color={'blackAlpha.500'}>
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
