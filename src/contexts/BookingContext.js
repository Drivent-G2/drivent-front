import { useState } from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookingContext = createContext();
export default BookingContext;

export function BookingProvider({ children }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const [roomTypeAvailable, setRoomTypeAvailable] = useLocalStorage('Single');
  const [peopleNumber, setPeopleNumber] = useLocalStorage(0);
  const [update, setUpdate] = useState(false);
  const [bookingId, setBookingId] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        selectedRoom,
        setSelectedRoom,
        confirmBooking,
        setConfirmBooking,
        roomTypeAvailable,
        setRoomTypeAvailable,
        peopleNumber,
        setPeopleNumber,
        update,
        setUpdate,
        bookingId,
        setBookingId
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
