import { useContext } from 'react';
import styled from 'styled-components';
import ActivitiesBody from '../../../components/Activities';
import UserContext from '../../../contexts/UserContext';

export default function Activities() {
  const { paymentConfirmation, ticketIsRemote } = useContext(UserContext);

  return(
    <>
      <ActivitiesContainer>
        <Title>Escolha de atividades</Title>
        {(!paymentConfirmation) && (
          <h1 className="advise">Você precisa ter confirmado o pagamento antes de fazer a escolha de atividades</h1>
        )}

        {(!paymentConfirmation && ticketIsRemote) && (
          <h1 className="advise">Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades</h1>
        )}

        {(paymentConfirmation && !ticketIsRemote) && (
          <ActivitiesBody/>
        )}

      </ActivitiesContainer>
    </>
  );
}

const Title = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 34px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
    .advise {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #8e8e8e;
      width: 55%;
      text-align: center;
    }
`;
