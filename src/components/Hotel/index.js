import { useState } from 'react';
import styled from 'styled-components';
import HotelsOptions from './HotelsOptions';

export default function HotelChoiceContainer(params) {
  const hotelsOptionsList = [{ id: 1, name: 'Hotel top', image: 'https://i.pinimg.com/736x/5b/39/12/5b39125cf21f51c38c475d86045957f5.jpg', Rooms: [], createdAt: Date.now(), updatedAt: Date.now() }, { id: 2, name: 'Hotel top2', image: 'https://i.pinimg.com/736x/5b/39/12/5b39125cf21f51c38c475d86045957f5.jpg', Rooms: [], createdAt: Date.now(), updatedAt: Date.now() }];

  const [hotelSelectedId, setHotelSelectedId] = useState(0);
  return(
    <>
      <HotelsOptions hotelsOptionsList={hotelsOptionsList} hotelSelectedId={hotelSelectedId} setHotelSelectedId={setHotelSelectedId}/>
    </>
  );
};
