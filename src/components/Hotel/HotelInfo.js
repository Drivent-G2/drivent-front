// import styled from 'styled-components';
import { getHotelsInfo } from '../../hooks/api/useHotel';

export default function HotelInfo(params) {
  const { h } = params;

  const talver = getHotelsInfo(h.id);

  let freeRooms = 0;

  if(talver) {
    talver.map(r => freeRooms = freeRooms+r.guests);
  }

  return(
    <>
      <img src={h.image} alt=''/>
      <h1> {h.name} </h1>
      <div>
        <h2>Tipos de acomodação:</h2>
        <h3>Single e Double</h3>
      </div>
      <div>
        <h2>Vagas disponíveis:</h2>
        <h3>{freeRooms}</h3>
      </div>
    </>
  );
};
