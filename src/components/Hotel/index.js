import { useEffect, useState } from 'react';
import { useHotel } from '../../hooks/api/useHotel';
import HotelsOptions from './HotelsOptions';

export default function HotelChoiceContainer(params) {
  const [hotelsOptionsList, setHotelsOptionsList] = useState([]);

  const hotelsList = useHotel();
  
  useEffect(() => {
    if(hotelsList) {
      setHotelsOptionsList(hotelsList);
    }
  }, [hotelsList]);

  return(
    <>
      <HotelsOptions hotelsOptionsList={hotelsOptionsList}/>
    </>
  );
};
