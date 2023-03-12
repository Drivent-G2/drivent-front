import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import HotelChoiceContainer from '../../../components/Hotel';
import RoomInfo from '../../../components/Hotel/RoomInfo';
import BookingContext from '../../../contexts/BookingContext';
import hotelContext from '../../../contexts/HotelContext';
import UserContext from '../../../contexts/UserContext';
import { useUserBooking } from '../../../hooks/api/useUserBooking';
import useToken from '../../../hooks/useToken';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { getTicketPaymentStatus } from '../../../services/paymentApi';

export default function Hotel() {
  const token = useToken();
  const { userData, ticket } = useContext(UserContext);
  const [enroll, setEnroll] = useState(false);
  const { paymentConfirmation, setPaymentConfirmation, selectHotel, selectTicket } = useContext(UserContext);
  const { isHotelSelected } = useContext(hotelContext);
  const [confirmBooking, setConfirmBooking] = useState(false);

  let isUserBooked = useUserBooking();

  useEffect(async() => {
    try {
      await getTicketPaymentStatus(token, ticket.id);
      setPaymentConfirmation(true);
      await getPersonalInformations(userData.token);
      setEnroll(true);
      if (isUserBooked)
        setConfirmBooking(true);
      else
        setConfirmBooking(false);
    } catch (err) {
      setEnroll(false);
      setPaymentConfirmation(false);
    }
  }, [isUserBooked]);

  return (
    <>
      {!confirmBooking?
        <>
          <Title> Escolha de hotel e quarto </Title>
          <HotelContainer>
            {(!enroll || !paymentConfirmation) && (
              <div className="center">
                <h1 className="advise">Você precisa ter confirmado o pagamento antes de fazer a escolha de hospedagem</h1>
              </div>
            )}
            {(selectTicket.name === 'Online' || selectHotel.name === 'Sem Hotel') && (
              <div className="center">
                <h1 className="advise">Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</h1>
              </div>
            )}
            {enroll && paymentConfirmation && selectHotel.name !== 'Sem Hotel' && <HotelChoiceContainer/>}
          </HotelContainer>
          {isHotelSelected?<RoomInfo/>:''}
        </>
        :
        'continuem daqui'
      }
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
