import { createContext } from 'react';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [paymentConfirmation, setPaymentConfirmation] = useLocalStorage('paymentConfirmation', false);

  return (
    <UserContext.Provider value={{ userData, setUserData, paymentConfirmation, setPaymentConfirmation }}>
      {children}
    </UserContext.Provider>
  );
}
