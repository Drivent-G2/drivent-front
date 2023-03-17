import { useState } from 'react';
import styled from 'styled-components';

export default function DateFilter(params) {
  const { availableDaysList } = params;
  const [daySelect, setDaySelect] = useState(0);

  console.log('chegou no filter:', availableDaysList);

  return(
    <>
      { (daySelect === 0) && <h1>Primeiro, filtre pelo dia do evento:</h1>}
      <AvailableDaysList>
        {availableDaysList.map(d => {
          if(daySelect === d.id) {
            return (
              <AvailableDay select={true} onClick={() => setDaySelect(0)} >{d.dateName}</AvailableDay>
            );
          }
          return(
            <AvailableDay select={false} onClick={() => setDaySelect(d.id)} >{d.dateName}</AvailableDay>
          );
        })}
      </AvailableDaysList>
    </>
  );
};

const AvailableDaysList = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const AvailableDay = styled.div`
    margin-right: 17px;
    width: 137px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    color: #000;
    background-color: ${params => params.select? '#FFD37D' : '#e0e0e0' };
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
