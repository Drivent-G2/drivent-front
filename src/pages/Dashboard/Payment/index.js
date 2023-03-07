import { useContext, useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/Ticket';
import TicketOverviewAndPayment from '../../../components/Payment';
import UserContext from '../../../contexts/UserContext';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { getTicketUserInformations } from '../../../services/ticketApi';

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [enroll, setEnroll] = useState(false);
  const [isTicketComplete, setIsTicketComplete] = useState(false);
  const [selectTicket, setSelectTicket] = React.useState(0);
  const [selectHotel, setSelectHotel] = React.useState(0);

  useEffect(async() => {
    try {
      await getPersonalInformations(userData.token);
      setEnroll(true);
    } catch (err) {
      setEnroll(false);
    }
  });

  useEffect(async() => {
    try {
      const ticket = await getTicketUserInformations(userData.token);
      if (!ticket) {
        setIsTicketComplete(false);
      } else {
        setSelectTicket(ticket.TicketType);
        setIsTicketComplete(true);
      }
    } catch (err) {
      setIsTicketComplete(false);
    }
  }, []);

  return (
    <TicketAndPayment>
      <Title>Ingresso e Pagamento</Title>
      <PaymentContainer>
        {!enroll && (
          <div className="center">
            <h1 className="advise">Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h1>
          </div>
        )}
        {enroll && !isTicketComplete && (
          <Ticket
            setIsTicketComplete={setIsTicketComplete}
            selectTicket={selectTicket}
            setSelectTicket={setSelectTicket}
            selectHotel={selectHotel}
            setSelectHotel={setSelectHotel}
          />
        )}
        {isTicketComplete && <TicketOverviewAndPayment selectTicket={selectTicket} selectHotel={selectHotel} />}
      </PaymentContainer>
    </TicketAndPayment>
  );
}

const TicketAndPayment = styled.div`
  width: 100%;
`;

const Title = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
`;

const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  .center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .advise {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #8e8e8e;
      width: 55%;
      text-align: center;
    }
  }
`;
