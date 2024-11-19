import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchRecruitsApi } from '../../api/recruit';
import { convertDateStringToDateKey } from '../../service/recruit';
import { FetchRecruitsApiResponse, Recruit } from '../../types/recruit';

export const getRecruitsQueryKey = () => {
  return ['recruits'];
};

export const useRecruitsQuery = <T extends unknown = FetchRecruitsApiResponse>(
  options?: Omit<
    UseQueryOptions<FetchRecruitsApiResponse, Error, T>,
    'queryKey'
  >
) => {
  return useQuery<FetchRecruitsApiResponse, Error, T>({
    queryKey: getRecruitsQueryKey(),
    queryFn: fetchRecruitsApi,
    ...options,
  });
};

/** @returns 채용 공고의 모든 시작, 끝 날짜를 key로 갖고, 이 날짜에 해당하는 채용 공고 리스트를 value로 갖는 객체 */
export const selectRecruitMapByDate = (res: FetchRecruitsApiResponse) => {
  type DateString = string;
  const recruitMapByDate: Record<DateString, Recruit[]> = {};

  res.forEach((recruit: Recruit) => {
    const startDate = convertDateStringToDateKey(recruit.start_time);
    const endDate = convertDateStringToDateKey(recruit.end_time);

    const hasStartDate = recruitMapByDate[startDate];
    const hasEndDate = recruitMapByDate[endDate];

    if (hasStartDate) {
      recruitMapByDate[startDate].push(recruit);
    } else {
      recruitMapByDate[startDate] = [recruit];
    }

    if (hasEndDate) {
      recruitMapByDate[endDate].push(recruit);
    } else {
      recruitMapByDate[endDate] = [recruit];
    }
  });

  return recruitMapByDate;
};
