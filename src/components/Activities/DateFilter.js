import { useEffect } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { getActivitiesByDay } from '../../services/activitiesApi';

export default function DateFilter(params) {
  const token = useToken();
  const { availableDaysList, daySelect, setDaySelect, setDayActivities } = params;

  useEffect(async() => {
    try {
      const activitiesData = await getActivitiesByDay(token, daySelect);
      setDayActivities(activitiesData);
    } catch (error) {
      console.log(error);
    }
  }, [daySelect]);
  
  return(
    <>
      { (daySelect === 0) && <h1>Primeiro, filtre pelo dia do evento:</h1>}
      <AvailableDaysList>
        {availableDaysList.map(d => {
          if(daySelect === d.id) {
            return (
              <AvailableDay key={d.id} select={true} onClick={() => setDaySelect(0)} >{d.dateName}</AvailableDay>
            );
          }
          return(
            <AvailableDay key={d.id} select={false} onClick={() => setDaySelect(d.id)} >{d.dateName}</AvailableDay>
          );
        })}
      </AvailableDaysList>
    </>
  );
};

const AvailableDaysList = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
`;

const AvailableDay = styled.div`
    margin-right: 17px;
    width: 137px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #000;
    background-color: ${params => params.select? '#FFD37D' : '#e0e0e0' };
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
