// import styled from 'styled-components';
import { findHotelWithRooms, getHotelsInfo } from '../../hooks/api/useHotel';
import { useContext } from 'react';
import BookingContext from '../../contexts/BookingContext';

export default function HotelInfo(params) {
  const { setRoomTypeAvailable } = useContext(BookingContext);
  const { h, hotelSelectedId } = params;
  const hotelInfo = getHotelsInfo(h.id);
  const hotelType = findHotelWithRooms(h.id);
  let capacity = 0;
  let freeRooms = 0;
  let roomTypeAvalible = 'Single';

  if(hotelInfo && hotelType) {
    hotelType.Rooms.forEach(r => {
      if(capacity < r.capacity) {
        capacity = r.capacity;
      }
      freeRooms = freeRooms + r.capacity;
    });

    hotelInfo.map(r => freeRooms = freeRooms - r.guests);

    if(capacity === 3) roomTypeAvalible = 'Single, Double e Triple';
    if(capacity === 2) roomTypeAvalible = 'Single, Double';

    if(hotelSelectedId) {
      setRoomTypeAvailable(roomTypeAvalible);
    }
  }

  return(
    <>
      <img src={h.image} alt=''/>
      <h1> {h.name} </h1>
      <div>
        <h2>Tipos de acomodação:</h2>
        <h3>{roomTypeAvalible}</h3>
      </div>
      <div>
        <h2>Vagas disponíveis:</h2>
        <h3>{freeRooms}</h3>
      </div>
    </>
  );
};
