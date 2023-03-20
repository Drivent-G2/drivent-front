import styled from 'styled-components';
import { BiExit } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';

export default function Activity(params) {
  const { atv } = params;

  function reserveActivity(activityId) {
    console.log(`O usuário quer fazer uma reserva da atividade: ${activityId}`);
  }

  if(atv.capacity > 0) {
    return(
      <ActivityComponent fullCapacity ={false} height={(atv.endsAt - atv.startsAt)/60} >
        <div className='info'>
          <span>{atv.name}</span>
          <span className='activityDuration'>{atv.startsAt/60}:00 - {atv.endsAt/60}:00</span>
        </div>
        <div className='vagas'>
          {<BiExit onClick={ () => reserveActivity(atv.id) } /> }
          {atv.capacity} vagas
        </div>
      </ActivityComponent>
    );
  } 

  return(
    <ActivityComponent fullCapacity ={true} >
      <div className='info'>
        <span>{atv.name}</span>
        <span className='activityDuration'>9:00 - 10:00</span>
      </div>
      <div className='vagas'>
        {<RxCrossCircled/>}
        {'Esgotado'}
      </div>
    </ActivityComponent>
  );
};

const ActivityComponent = styled.div`
    width: 265px;
    height: ${params => params.height > 0 ? (params.height * 80)+'px' : '79px' };
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
        font-size: 9px;
        color: ${params => params.fullCapacity ? '#CC6666' : '#078632' };
        font-weight: 700;
        svg {
          font-size: 30px;
          margin-bottom: 3px;
        }
    }
`;
