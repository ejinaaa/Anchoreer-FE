import { useEffect } from 'react';
import { useDutiesQuery } from '../../hooks/duty/useDutiesQuery';

export const DutyFilter = () => {
  const { data: duties } = useDutiesQuery();

  useEffect(() => {
    console.log('duties: ', duties);
  }, [duties]);

  return <></>;
};
