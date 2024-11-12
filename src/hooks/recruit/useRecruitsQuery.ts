import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchRecruitsApi } from '../../api/recruit';
import { FetchRecruitsApiResponse } from '../../types/recruit';

export const getRecruitsQueryKey = () => {
  return ['recruits'];
};

export const useRecruitsQuery = <T extends unknown = FetchRecruitsApiResponse>(
  options?: UseQueryOptions<FetchRecruitsApiResponse, Error, T>
) => {
  return useQuery<FetchRecruitsApiResponse, Error, T>({
    queryKey: getRecruitsQueryKey(),
    queryFn: fetchRecruitsApi,
    ...options,
  });
};
