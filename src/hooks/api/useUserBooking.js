import { getUserBooking } from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useHotel() {
  const token = useToken();

  const booking = useAsync(() => getUserBooking(token));

  return booking.data;
};
