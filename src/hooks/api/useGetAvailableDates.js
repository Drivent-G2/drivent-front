import { getAvailableDates } from '../../services/activitiesApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useGetAvailableDates() {
  const token = useToken();

  const availableDatesList = useAsync(() => getAvailableDates(token));

  return availableDatesList.data;
};
