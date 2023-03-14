import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

export default function TicketTypes(params) {
  const { ticketsTypeList, setSelectTicket, selectTicket } = params;

  const [ticketsList, setTicketsList] = React.useState([]);

  const { setTicketIsRemote } = useContext(UserContext);
  
  useEffect(() => {
    if(!ticketsTypeList) {
      setTicketsList([]);
    } else {
      setTicketsList(ticketsTypeList);
    }
  }, [ticketsTypeList]);
  
  return (
    <TicketTypeContainer> 
      {ticketsList.map(t => {
        if(selectTicket.id === t.id) { 
          return (
            <div className="ticket selectTicket" key={t.id} >
              <h1>{t.name}</h1>
              <h2>R$ {t.price},00</h2>
            </div>
          );
        } else {
          return (
            <div className="ticket dontSelectTicket" key={t.id} onClick={() => { setSelectTicket(t); setTicketIsRemote(t.isRemote);  }} >
              <h1>{t.name}</h1>
              <h2>R$ {t.price},00</h2>
            </div>
          );
        }
      })}
    </TicketTypeContainer>
  );
};

const TicketTypeContainer = styled.div`
  margin-top:15px;
  display:flex;
  .selectTicket {
    background-color: #ffeed2;
  }

  .dontSelectTicket {
    border: 1px solid #cecece;
  }
  .ticket {
    width:145px;
    height:145px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:24px;
    font-weight:400;
    font-family: 'Roboto';
    cursor: pointer;
    h1 {
      font-size:16px;
      color: #454545;
      margin-bottom:5px;
    }
    h2 {
      font-size:14px;
      color: #898989;
    }
  }
`;
