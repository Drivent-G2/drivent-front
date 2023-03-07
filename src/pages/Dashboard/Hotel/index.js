import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import paymentContext from '../../../contexts/paymentContext';
import UserContext from '../../../contexts/UserContext';
import { getPersonalInformations } from '../../../services/enrollmentApi';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [enroll, setEnroll] = useState(false);
  const { paymentConfirmation } = useContext(paymentContext);

  useEffect(async() => {
    try {
      await getPersonalInformations(userData.token);
      setEnroll(true);
    } catch (err) {
      setEnroll(false);
    }
  });
  // return 'Hotel: Em breve !'; 
  return (
    <>
      <Title> Escolha de hotel e quarto </Title>
      <HotelContainer>
        {(!enroll || !paymentConfirmation) && (
          <div className="center">
            <h1 className="advise">Você precisa ter confirmado o pagamento antes de fazer a escolha de hospedagem</h1>
          </div>
        )}
      </HotelContainer>
    </>
  );
}

const Title = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 34px;
`;

const HotelContainer = styled.div`
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
