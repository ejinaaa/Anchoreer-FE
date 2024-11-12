import axios from 'axios';
import { FetchRecruitsApiResponse } from '../types/recruit';

export const fetchRecruitsApi = async () => {
  const res = await axios.get<FetchRecruitsApiResponse>(
    `${process.env.REACT_APP_API_URL}/recruits.json`
  );
  return res.data;
};
