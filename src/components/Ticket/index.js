import React, { useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import useTicketsType from '../../hooks/api/useTicketsType';
import TicketTypes from './TicketTypes';
import HotelTypes from './HotelTypes';
import { postUserTicket } from '../../services/ticketApi';
import { getTicketUserInformations } from '../../services/ticketApi';

export default function Ticket(params) {
  const { userData } = useContext(UserContext);
  const { setIsTicketComplete, selectTicket, setSelectTicket, selectHotel, setSelectHotel, setTicket } = params;
  const ticketsTypeList = useTicketsType();
  const [textHotel, setTextHotel] = React.useState('');
  const [textOverview, setTextOverview] = React.useState('');
  
  // Daria para transformar isso em um só UseEffect?

  useEffect(() => {
    if(selectTicket.name !== 'Presencial') {
      setTextHotel('');
    }else{
      setTextHotel('Ótimo! Agora escolha sua modalidade de hospedagem');
    }
    if (selectTicket.name === 'Remoto' || selectTicket.name === 'Online') {
      setSelectHotel(0);
    }
  }, [selectTicket]);

  useEffect(() => {
    if (selectTicket.name === 'Remoto' || selectTicket.name === 'Online') {
      setSelectHotel(0);
      setTextOverview(`Fechado, o total ficou em R$${selectTicket.price}. Agora é só confirmar`);
    } else if (selectTicket.name === 'Presencial' && selectHotel) {
      setTextOverview(`Fechado, o total ficou em R$${selectTicket.price + selectHotel.price}. Agora é só confirmar`);
    } else if (selectTicket.name === 'Presencial' && !selectHotel) {
      setTextOverview('');
    }
  }, [selectTicket, selectHotel]);

  //-------------------------------------------------

  async function submitIngress(ticketTypeId, token) {
    try {
      await postUserTicket({ ticketTypeId }, token );
      const ticketData = await getTicketUserInformations(userData.token);
      setTicket(ticketData);
      setIsTicketComplete(true);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <TicketContainer>
      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <TicketTypes ticketsTypeList={ ticketsTypeList } selectTicket={selectTicket} setSelectTicket={setSelectTicket} />
      <HotelChoice>
        <h2>{textHotel}</h2>
        <HotelTypes ticketsTypeList={ ticketsTypeList } selectTicket={selectTicket} selectHotel={selectHotel} setSelectHotel={setSelectHotel} />
      </HotelChoice>
      <OrderOverview>
        <h2>{textOverview}</h2>
        {textOverview.length > 0 && <button onClick={() => submitIngress(selectTicket.id, userData.token)} className='reserveTicket'>RESERVAR INGRESSO</button>}
      </OrderOverview>
    </TicketContainer>
  );
};

const TicketContainer = styled.div`
  margin-top:35px;
`;

const HotelChoice = styled.div`
  margin-top:35px;
`;

const OrderOverview = styled.div`
  margin-top:35px;
  .reserveTicket {
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    cursor: pointer;
  }
`;
