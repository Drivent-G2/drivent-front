import { getUserBookingActivities } from '../../services/activitiesApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useGetUserBookingActivities() {
  const token = useToken();
  
  const booking = useAsync(() => getUserBookingActivities(token));
  
  return booking.data;
};
