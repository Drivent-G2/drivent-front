import { getUserBooking } from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useUserBooking() {
  const token = useToken();

  const booking = useAsync(() => getUserBooking(token));

  return booking.data;
};

export function useCreateBooking(body) {
  const token = useToken();

  const booking = useAsync(() => getUserBooking(token, body));

  return booking;
}
