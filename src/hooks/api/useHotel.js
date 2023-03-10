import { getHotel } from '../../services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function useHotel() {
  const token = useToken();

  const hotels = useAsync(() => getHotel(token));

  return hotels.data;
};
