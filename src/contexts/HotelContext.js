import { useState } from 'react';
import { createContext } from 'react';

const hotelContext = createContext();
export default hotelContext;

export function HotelProvider({ children }) {
  const [isHotelSelected, setIsHotelSelected] = useState(false);
  const [hotelSelectedId, setHotelSelectedId] = useState(0);

  return (
    <hotelContext.Provider value={{ isHotelSelected, setIsHotelSelected, hotelSelectedId, setHotelSelectedId }}>
      {children}
    </hotelContext.Provider>
  );
}
