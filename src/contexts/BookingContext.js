import { useState } from 'react';
import { createContext } from 'react';
import { useUserBooking } from '../hooks/api/useUserBooking';

const BookingContext = createContext();
export default BookingContext;

export function BookingProvider({ children }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [confirmBooking, setConfirmBooking] = useState(false);

  return (
    <BookingContext.Provider value={{ selectedRoom, setSelectedRoom, confirmBooking, setConfirmBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
