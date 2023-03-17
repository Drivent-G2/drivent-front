import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Activity(params) {
  const { atv } = params;

  const { atvInfo, setAtvInfo } = useState({
    id: 6,
    dateId: 3,
    auditoryId: 2,
    startsAt: 540,
    endsAt: 600,
    capacity: 100,
    Auditory: {
      id: 2,
      auditoryName: 'Auditório Lateral'
    }
  }
  );

  useEffect(() => {
    // console.log('useEffect rodou', atv);
    if(atv === undefined) console.log('caiu no undef');

    if(atv !== undefined) console.log('caiu no if', atv);
  }, [atv]);

  //   console.log(atv);

  return(
    <ActivityComponent>
      <div className='info'>
        <span>Minecraft: montando pc ideal</span>
        <span className='activityDuration'>9:00 - 10:00</span>
      </div>
      <div className='vagas'>
        {atv.capacity}
      </div>
    </ActivityComponent>
  );
};

const ActivityComponent = styled.div`
    width: 265px;
    height: 79px;
    background-color: #f1f1f1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  10px;
    margin-bottom: 10px;
    .info {
        width: 190px;
        height: 60px;
        display: flex;
        flex-direction: column;
        border-right: 3px solid #cfcfcf;
        span {
            font-size: 12px;
            color: #343434;
            font-weight: 700;
            margin-top: 6px;
        }
        .activityDuration {
            font-weight: 400;
        }
    }
    .vagas {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 40px;
        font-size: 9px;
        color: #078632
    }
`;
