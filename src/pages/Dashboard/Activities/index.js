import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';

export default function Activities() {
  const { paymentConfirmation } = useContext(UserContext);
  console.log('toma a confirmação:', paymentConfirmation);

  if(!paymentConfirmation) {
    return(
      <>
        <Title>Escolha de atividades</Title>
        <ActivitiesContainer>
          {(!paymentConfirmation) && (
            <h1 className="advise">Você precisa ter confirmado o pagamento antes de fazer a escolha de atividades</h1>
          )}
        </ActivitiesContainer>
      </>
    );
  };
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
