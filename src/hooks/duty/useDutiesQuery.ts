import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchDutiesApi } from '../../api/duty';
import { FetchDutiesApiResponse } from '../../types/duty';

export const getDutiesQueryKey = () => {
  return ['duties'];
};

export const useDutiesQuery = <T extends unknown = FetchDutiesApiResponse>(
  options?: UseQueryOptions<FetchDutiesApiResponse, Error, T>
) => {
  return useQuery<FetchDutiesApiResponse, Error, T>({
    queryKey: getDutiesQueryKey(),
    queryFn: fetchDutiesApi,
    ...options,
  });
};
