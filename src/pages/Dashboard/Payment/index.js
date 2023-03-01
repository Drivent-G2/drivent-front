import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/Ticket';
import UserContext from '../../../contexts/UserContext';
import { getPersonalInformations } from '../../../services/enrollmentApi';

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [enroll, setEnroll] = useState(false);

  useEffect(async() => {
    try {
      await getPersonalInformations(userData.token);
      setEnroll(true);
    } catch (err) {
      setEnroll(false);
    }
  });

  return (
    <TicketAndPayment>
      <Title>Ingresso e Pagamento</Title>
      <PaymentContainer>{enroll?<Ticket/>:<div className="center"><h1 className='advise'>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h1></div>}</PaymentContainer>
    </TicketAndPayment>
  );
}

const TicketAndPayment = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

`;

const Title = styled.div`
  position: absolute;
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
  .center{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .advise{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #8E8E8E;
      width: 55%;
      text-align: center;
    }
  }
`;

