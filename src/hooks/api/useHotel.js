import { getHotel, getHotelRoomsInfo } from '../../services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';
 
export function useHotel() {
  const token = useToken();

  const hotels = useAsync(() => getHotel(token));

  return hotels.data;
};

export function getHotelsInfo(hotelId) {
  const token = useToken();

  const hotelsInfo = useAsync(() => getHotelRoomsInfo(token, hotelId));

  return hotelsInfo.data;
};
