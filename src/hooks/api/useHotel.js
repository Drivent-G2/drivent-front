import { getHotel } from '../../services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';
 
export function useHotel() {
  const token = useToken();

  const hotels = useAsync(() => getHotel(token));

  return hotels.data;
};

export function getHotelsInfo() {
  const token = useToken();
  return('toma o token', token);
};
