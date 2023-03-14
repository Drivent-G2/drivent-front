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
import { getEveryBooking } from '../../../services/bookingApi';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { getHotelWithRooms } from '../../../services/hotelApi';
import { getTicketPaymentStatus } from '../../../services/paymentApi';

export default function Hotel() {
  const token = useToken();
  const { isHotelSelected, hotelSelectedId } = useContext(hotelContext);
  const { userData, ticket, paymentConfirmation, setPaymentConfirmation, selectHotel, selectTicket } = useContext(UserContext);
  const [enroll, setEnroll] = useState(false);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const [selectedBookingHotel, setSelectedBookingHotel] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);

  let isUserBooked = useUserBooking();

  useEffect(async() => {
    try {
      await getTicketPaymentStatus(token, ticket.id);
      setPaymentConfirmation(true);
      await getPersonalInformations(userData.token);
      setEnroll(true);
      if (isUserBooked) {
        const hotel = await getHotelWithRooms(token, hotelSelectedId);
        const booking = await getEveryBooking(token, hotelSelectedId);
        setPeopleNumber(booking.length);
        setSelectedBookingHotel(hotel);
        setConfirmBooking(true);
      } else {
        setConfirmBooking(false);
      }
    } catch (err) {
      setEnroll(false);
      setPaymentConfirmation(false);
    }
  }, [isUserBooked]);

  return (
    <>
      {!confirmBooking ? (
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
            <img src={selectedBookingHotel.image} alt="" />
            <h1> {selectedBookingHotel.name} </h1>
            <div>
              <h2>Quarto reservado</h2>
              <h3>Single e Double</h3>
            </div>
            <div>
              <h2>Pessoas no seu quarto</h2>
              {peopleNumber > 1 && <h3>Você e mais {peopleNumber} pessoas</h3>}
              {peopleNumber === 1 && <h3>Você e mais 1 pessoa</h3>}
              {peopleNumber === 0 && <h3>Só você</h3>}
            </div>
          </HotelOverview>
          <UpdateRoom>
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
  background-color: ${(params) => (params.select ? '#FFEED2' : '#EBEBEB')};
  width: 196px;
  height: 264px;
  padding: 14px;
  box-sizing: border-box;
  margin-right: 19px;
  border-radius: 10px;
  cursor: pointer;
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
