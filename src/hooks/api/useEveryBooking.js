import { getEveryBooking } from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useEveryBooking(hotelId) {
  const token = useToken();
  
  const booking = useAsync(() => getEveryBooking(token, hotelId));

  if(!booking.loading) 
    return booking.data;
}
