import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import BookingContext from '../../contexts/BookingContext';
import hotelContext from '../../contexts/HotelContext';
import useToken from '../../hooks/useToken';
import { getEveryBooking, postBooking } from '../../services/bookingApi';
import { getHotelWithRooms } from '../../services/hotelApi';
import RoomCard from './RoomCard';

export default function RoomInfo() {
  const token = useToken();
  const { hotelSelectedId } = useContext(hotelContext);
  const { selectedRoom, setConfirmBooking } = useContext(BookingContext);
  const [guestsNumber, setGuestsNumber] = useState(null);
  const [rooms, setRooms] = useState([]);

  async function bookRoom() {
    await postBooking(token, { roomId: selectedRoom, hotelId: hotelSelectedId });
    setConfirmBooking(true);
  }

  useEffect(async() => {
    const roomsGuests = await getEveryBooking(token, hotelSelectedId);
    setGuestsNumber(roomsGuests);
    const { Rooms } = await getHotelWithRooms(token, hotelSelectedId);
    
    setRooms(Rooms);
  }, [hotelSelectedId]);

  return (
    <RoomContainer>
      <h1 className="title">Ótima pedida! Agora escolha seu quarto:<span>{hotelSelectedId}</span></h1>
      <RoomOptions>
        {rooms.map((r, i) => {
          return (
            <RoomCard rooms={rooms} guestsNumber={guestsNumber} roomId={r.id} key={i} roomName={r.name} roomCapacity={r.capacity} />
          );
        })}
      </RoomOptions>
      {selectedRoom ? <Book onClick={bookRoom}>RESERVAR QUARTO</Book> : ''}
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  margin-top: 50px;
`;

const RoomOptions = styled.div`
  margin-top: 33px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 17px;
`;

const Book = styled.button`
  margin-top: 50px;
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
`;
