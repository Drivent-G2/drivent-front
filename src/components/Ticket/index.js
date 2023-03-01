import React from 'react';
import styled from 'styled-components';
import useTicketsType from '../../hooks/api/useTicketsType';
import TicketType from './TicketType';

export default function Ticket(params) {
  const ticketsTypeList = useTicketsType();

  return (
    <TicketContainer>
      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <TicketType ticketsTypeList={ ticketsTypeList } />
      <HotelChoice>

      </HotelChoice>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  margin-top:35px;
`;

const HotelChoice = styled.div`
  
`;
