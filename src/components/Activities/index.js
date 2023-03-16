import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetAvailableDates } from '../../hooks/api/useGetAvailableDates';
import DateFilter from './DateFilter';

export default function ActivitiesComponent(params) {
  const availableDatesList = useGetAvailableDates();
  const [availableDaysList, setAvailableDaysList] = useState([]);

  useEffect(() => {
    if(availableDatesList ?.length > 0) {
      setAvailableDaysList(availableDatesList);
    }
  }, [availableDatesList]);

  return(
    <>
      <ActivitiesBody>
        <DateFilter availableDaysList={availableDaysList} />
      </ActivitiesBody>
    </>
  );
};

const ActivitiesBody = styled.div`
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
