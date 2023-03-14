import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';

export default function Activities() {
  const { paymentConfirmation, ticketIsRemote } = useContext(UserContext);
  console.log(ticketIsRemote);

  return(
    <>
      <Title>Escolha de atividades</Title>
      <ActivitiesContainer>
        {(!paymentConfirmation) && (
          <h1 className="advise">Você precisa ter confirmado o pagamento antes de fazer a escolha de atividades</h1>
        )}

        {(!paymentConfirmation && ticketIsRemote) && (
          <h1 className="advise">Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades</h1>
        )}

        {(paymentConfirmation && ticketIsRemote) && (

        //favor apagar esse componente para adicionar a feature com as atividades

          <h1 className="advise">
            Sua modalidade de ingresso é online e o seu pagamento está confirmado. <br/>
            Aqui irão aparecer todas as atividades do evento!
            <br/>(em breve)
          </h1>
        )}

      </ActivitiesContainer>
    </>
  );
}

const Title = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 34px;
`;

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 60%;
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
`;
