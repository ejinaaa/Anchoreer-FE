export interface Duty {
  id: number;
  name: string;
  parent_id: number;
}

export type FetchDutiesApiResponse = Duty[];
