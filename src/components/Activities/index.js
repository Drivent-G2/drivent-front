import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetAvailableDates } from '../../hooks/api/useGetAvailableDates';
import Auditorys from './Auditory';
import DateFilter from './DateFilter';

export default function ActivitiesBody(params) {
  const availableDatesList = useGetAvailableDates();
  const [availableDaysList, setAvailableDaysList] = useState([]);
  
  console.log('something');

  useEffect(() => {
    if( availableDatesList ?.length>0 ) {
      setAvailableDaysList(availableDatesList);
    }
  }, [availableDatesList]);

  return(
    <>
      <ActivitiesBodyContainer>
        <DateFilter availableDaysList={availableDaysList} />
        <Auditorys/>
      </ActivitiesBodyContainer>
    </>
  );
};

const ActivitiesBodyContainer = styled.div`
width:100%;
height:100%;
padding-top: 67px;
box-sizing: border-box;
h1 {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 23px;
}
`;
