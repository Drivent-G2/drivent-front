import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTicketsType from '../../hooks/api/useTicketsType';
import TicketType from './TicketType';
import HotelType from './HotelType';

export default function Ticket(params) {
  const ticketsTypeList = useTicketsType();
  const [selectTicket, setSelectTicket] = React.useState(0);
  const [textHotel, setTextHotel] = React.useState('');

  useEffect(() => {
    if(selectTicket.name !== 'Presencial') {
      setTextHotel('');
    }else{
      setTextHotel('Ótimo! Agora escolha sua modalidade de hospedagem');
    }
  }, [selectTicket]);

  return (
    <TicketContainer>
      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <TicketType ticketsTypeList={ ticketsTypeList } selectTicket={selectTicket} setSelectTicket={setSelectTicket} />
      <HotelChoice>
        <h2>{textHotel}</h2>
        <HotelType ticketsTypeList={ ticketsTypeList } selectTicket={selectTicket} setSelectTicket={setSelectTicket} />
      </HotelChoice>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  margin-top:35px;
`;

const HotelChoice = styled.div`
  margin-top:35px;
`;
