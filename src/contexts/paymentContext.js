import React from 'react';
import { createContext } from 'react';

const paymentContext = createContext();
export default paymentContext;

export function PaymentProvider({ children }) {
  const [paymentConfirmation, setPaymentConfirmation] = React.useState(false);

  return (
    <paymentContext.Provider value={{ paymentConfirmation, setPaymentConfirmation }}>
      {children}
    </paymentContext.Provider>
  );
}
