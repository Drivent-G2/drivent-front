import { useContext } from 'react';
import styled from 'styled-components';
import hotelContext from '../../contexts/HotelContext';
import { useEveryBooking } from '../../hooks/api/useEveryBooking';
import { useHotelRooms } from '../../hooks/api/useHotelRooms';
import RoomCard from './RoomCard';

export default function RoomInfo() {
  const { hotelSelectedId } = useContext(hotelContext);

  const Rooms = useHotelRooms(hotelSelectedId) || [];

  const roomsGuests = useEveryBooking(hotelSelectedId) || [];

  return (
    <RoomContainer>
      <h1 className="title">Ótima pedida! Agora escolha seu quarto:</h1>
      <RoomOptions>
        {Rooms.map((r, i) => {
          return (
            <RoomCard roomsActualCapacity={roomsGuests} roomId={r.id} key={i}roomName={r.name} roomCapacity={r.capacity} />
          );
        })}
      </RoomOptions>
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
  margin-top: 50px;
`;

const RoomOptions = styled.div`
  margin-top: 33px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px
`;
