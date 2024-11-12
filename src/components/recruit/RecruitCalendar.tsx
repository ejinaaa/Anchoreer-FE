import { useEffect } from 'react';
import { useRecruitsQuery } from '../../hooks/recruit/useRecruitsQuery';

export const RecruitCalendar = () => {
  const { data: recruits } = useRecruitsQuery();

  useEffect(() => {
    console.log('recruits: ', recruits);
  }, [recruits]);

  return <></>;
};
