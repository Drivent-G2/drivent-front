import { createContext } from 'react';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [paymentConfirmation, setPaymentConfirmation] = useLocalStorage('paymentConfirmation', false);
  const [ticket, setTicket] = React.useState(0);
  const [selectTicket, setSelectTicket] = React.useState(0);
  const [selectHotel, setSelectHotel] = useLocalStorage('selectHotel', 0);

  const [ticketIsRemote, setTicketIsRemote] = useLocalStorage('ticketIsRemote', false);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        paymentConfirmation,
        setPaymentConfirmation,
        ticket,
        setTicket,
        selectTicket,
        setSelectTicket,
        selectHotel,
        setSelectHotel,

        ticketIsRemote,
        setTicketIsRemote
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
