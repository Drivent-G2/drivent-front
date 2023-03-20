import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetAvailableDates } from '../../hooks/api/useGetAvailableDates';
import { useGetUserBookingActivities } from '../../hooks/api/useGetUserBookingActivities';

import Auditorys from './Auditory';
import DateFilter from './DateFilter';

export default function ActivitiesBody(params) {
  const [daySelect, setDaySelect] = useState(0);//
  const availableDatesList = useGetAvailableDates();//
  const userActivities = useGetUserBookingActivities();

  const [dayActivities, setDayActivities] = useState([]);
  const [availableDaysList, setAvailableDaysList] = useState([]);

  useEffect(() => {
    if (availableDatesList?.length > 0) {
      setAvailableDaysList(availableDatesList);
    }
  }, [availableDatesList]);

  return (
    <>
      <ActivitiesBodyContainer>
        <DateFilter
          daySelect={daySelect}
          setDaySelect={setDaySelect}
          availableDaysList={availableDaysList}
          setDayActivities={setDayActivities}
        />
        
        {daySelect !== 0 && (
          <Auditorys daySelect={daySelect} dayActivities={dayActivities} userActivities={userActivities}/>
        )}
      </ActivitiesBodyContainer>
    </>
  );
}

const ActivitiesBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 67px;
  box-sizing: border-box;
  h1 {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 23px;
  }
`;
