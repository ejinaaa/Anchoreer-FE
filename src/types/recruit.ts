import { Duty } from './duty';

export interface Recruit {
  id: number;
  company_name: string;
  title: string;
  start_time: string;
  end_time: string;
  image_url: string;
  duty_ids: Duty['id'][];
}

export type FetchRecruitsApiResponse = Recruit[];
