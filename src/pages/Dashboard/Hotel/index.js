import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import useToken from '../../../hooks/useToken';
import { useUserBooking } from '../../../hooks/api/useUserBooking';
import HotelChoiceContainer from '../../../components/Hotel';
import RoomInfo from '../../../components/Hotel/RoomInfo';
import hotelContext from '../../../contexts/HotelContext';
import UserContext from '../../../contexts/UserContext';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { getTicketPaymentStatus } from '../../../services/paymentApi';
import styled from 'styled-components';
import BookingContext from '../../../contexts/BookingContext';
import { getUserBooking } from '../../../services/bookingApi';

export default function Hotel() {
  const token = useToken();
  const { roomTypeAvailable, peopleNumber } = useContext(BookingContext);
  const { isHotelSelected } = useContext(hotelContext);
  const { userData, ticket, paymentConfirmation, setPaymentConfirmation, selectHotel, selectTicket } = useContext(UserContext);
  const { confirmBooking, setSelectedRoom, setUpdate, setBookingId, setConfirmBooking } = useContext(BookingContext);
  const [enroll, setEnroll] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  let isUserBooked = useUserBooking();

  useEffect(async() => {
    console.log(confirmBooking);
    try {
      await getTicketPaymentStatus(token, ticket.id);
      setPaymentConfirmation(true);

      await getPersonalInformations(userData.token);
      setEnroll(true);

      if (isUserBooked || confirmBooking) {
        setShowBooking(true);
      } else {
        setShowBooking(false);
      }
    } catch (err) {
      setEnroll(false);
      setPaymentConfirmation(false);
    }
  }, [ isUserBooked, confirmBooking ]);

  function updateRoom() {
    setShowBooking(false);
    setSelectedRoom(isUserBooked.Room.id);
    setBookingId(isUserBooked.id);
    setConfirmBooking(false);
    setUpdate(true);
  }

  return (
    <>
      {!showBooking ? (
        <>
          <Title> Escolha de hotel e quarto </Title>
          <HotelContainer>
            {(!enroll || !paymentConfirmation) && (
              <div className="center">
                <h1 className="advise">
                  Você precisa ter confirmado o pagamento antes de fazer a escolha de hospedagem
                </h1>
              </div>
            )}
            {(selectTicket.name === 'Online' || selectHotel.name === 'Sem Hotel') && (
              <div className="center">
                <h1 className="advise">
                  Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
                </h1>
              </div>
            )}
            {enroll && paymentConfirmation && selectHotel.name !== 'Sem Hotel' && <HotelChoiceContainer />}
          </HotelContainer>
          {isHotelSelected ? <RoomInfo /> : ''}
        </>
      ) : (
        <>
          <Title>Você já escolheu seu quarto:</Title>
          <HotelOverview>
            <img src={isUserBooked?.Hotel.image} alt="" />
            <h1> {isUserBooked?.Hotel.name} </h1>
            <div>
              <h2>Quarto reservado</h2>
              <h3>{roomTypeAvailable}</h3>
            </div>
            <div>
              <h2>Pessoas no seu quarto</h2>
              {peopleNumber > 1 && <h3>Você e mais {peopleNumber} pessoas</h3>}
              {peopleNumber === 1 && <h3>Você e mais 1 pessoa</h3>}
              {peopleNumber === 0 && <h3>Só você</h3>}
            </div>
          </HotelOverview>
          <UpdateRoom onClick={updateRoom}>
            TROCAR DE QUARTO
          </UpdateRoom>
        </>
      )}
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
  height: 60%;
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

const HotelOverview = styled.div`
  margin-top: 35px;
  background-color: ${(params) => (params.select ? '#FFEED2' : '#EBEBEB')};
  width: 196px;
  height: 264px;
  padding: 14px;
  box-sizing: border-box;
  margin-right: 19px;
  border-radius: 10px;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    margin: 10px 0;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    margin-bottom: 14px;
  }
  h2 {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  h3 {
    font-size: 12px;
    font-weight: 400;
  }
`;

const UpdateRoom = styled.button`
  margin-top: 50px;
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
`;
