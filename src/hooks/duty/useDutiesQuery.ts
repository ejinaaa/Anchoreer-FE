import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchDutiesApi } from '../../api/duty';
import { FetchDutiesApiResponse } from '../../types/duty';
import { hourToMilliseconds } from '../../utils/time';

export const getDutiesQueryKey = () => {
  return ['duties'];
};

export const useDutiesQuery = <T extends unknown = FetchDutiesApiResponse>(
  options?: UseQueryOptions<FetchDutiesApiResponse, Error, T>
) => {
  return useQuery<FetchDutiesApiResponse, Error, T>({
    queryKey: getDutiesQueryKey(),
    queryFn: fetchDutiesApi,
    staleTime: hourToMilliseconds(24),
    gcTime: hourToMilliseconds(24.5),
    ...options,
  });
};
