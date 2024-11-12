import axios from 'axios';
import { FetchDutiesApiResponse } from '../types/duty';

export const fetchDutiesApi = async () => {
  const res = await axios.get<FetchDutiesApiResponse>(
    `${process.env.REACT_APP_API_URL}/duties.json`
  );
  return res.data;
};
