import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function HotelTypes(params) {
  const { ticketsTypeList, selectTicket, selectHotel, setSelectHotel } = params;

  const [ticketsList, setTicketsList] = React.useState([]);

  const hotels = [
    { id: 3, name: 'Sem Hotel', price: 0 },
    { id: 2, name: 'com Hotel', price: 200 },
  ];

  useEffect(() => {
    if (!ticketsTypeList) {
      setTicketsList([]);
    } else {
      setTicketsList(ticketsTypeList);
    }
  }, [ticketsTypeList]);

  if (selectTicket.name !== 'Presencial' || selectTicket.includesHotel === false) {
    return <h1></h1>;
  } else {
    return (
      <TicketTypeContainer>
        {hotels.map((t) => {
          if (selectHotel.id === t.id) {
            return (
              <div className="hotel selectHotel" key={t.id}>
                <h1>{t.name}</h1>
                <h2>R$ {t.price},00</h2>
              </div>
            );
          } else {
            return (
              <div className="hotel dontSelectHotel" key={t.id} onClick={() => setSelectHotel(t)}>
                <h1>{t.name}</h1>
                <h2>R$ {t.price},00</h2>
              </div>
            );
          }
        })}
      </TicketTypeContainer>
    );
  }
}

const TicketTypeContainer = styled.div`
  margin-top: 15px;
  display: flex;
  .selectHotel {
    background-color: #ffeed2;
  }

  .dontSelectHotel {
    border: 1px solid #cecece;
  }
  .hotel {
    width: 145px;
    height: 145px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    font-weight: 400;
    font-family: 'Roboto';
    h1 {
      font-size: 16px;
      color: #454545;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 14px;
      color: #898989;
    }
  }
`;
