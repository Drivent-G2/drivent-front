import styled from 'styled-components';
import React from 'react';
import CreditCardForm from './CreditCardForm';
import PaymentConfirmed from './PaymentConfirmed';
import { usePayment, useProcessTicketPayment } from '../../hooks/api/usePayment';
  
export default function TicketOverviewAndPayment(params) {
  const { selectTicket, selectHotel, setPaymentConfirmation } = params;
  const [isCreditCardComplete, setIsCreditCardComplete] = React.useState(false);
  const ticketIsPaid = usePayment(selectTicket.id);

  const [cardParams, setCardParams] = React.useState({ number: undefined });

  if(cardParams.number) {
    useProcessTicketPayment(selectTicket.id, cardParams);
  };

  return (
    <TicketAndPaymentContainer>
      <h2>Ingresso escolhido</h2>
      <div className="ticketOverview">
        <h1>{selectHotel ? `${selectTicket.name} + ${selectHotel.name}` : `${selectTicket.name}`}</h1>
        <h2>{selectHotel ? `R$ ${selectTicket.price + selectHotel.price}` : `R$ ${selectTicket.price}`}</h2>
      </div>
      <h2>Pagamento</h2>
      {isCreditCardComplete ? <PaymentConfirmed/> : <CreditCardForm setIsCreditCardComplete={setIsCreditCardComplete} ticketIsPaid={ticketIsPaid} setCardParams={setCardParams} setPaymentConfirmation={setPaymentConfirmation}/>}
    </TicketAndPaymentContainer>

  );
}

const TicketAndPaymentContainer = styled.div`
  margin-top: 35px;
  .ticketOverview {
    margin-top:15px;
    margin-bottom: 35px;
    width: 300px;
    height: 145px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    font-weight: 400;
    font-family: 'Roboto';
    background-color: #ffeed2;
    h1 {
      font-size: 16px;
      color: #454545;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 14px;
      color: #898989;
    }
  }
`;

