import styled from 'styled-components';
import Activity from './Activity';

export default function Auditorys(params) {
  const { daySelect, dayActivities } = params;

  return(
    <AuditoryList>
      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Auditório Principal</h1>

        <div className='activitiesBoxList'>

          {dayActivities.map(atv => {
            if(atv.dateId === daySelect && atv.auditoryId === 1) {
              return (
                <Activity atv={atv}/>
              );
            }
          })}

        </div>
      </div>

      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Auditório Lateral</h1>
        <div className='activitiesBoxList'>

          {dayActivities.map(atv => {
            if(atv.dateId === daySelect && atv.auditoryId === 2) {
              return (
                <Activity atv={atv}/>
              );
            }
          })}

        </div>
      </div>

      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Sala de Workshop </h1>
        <div className='activitiesBoxList'>

          {dayActivities.map(atv => {
            if(atv.dateId === daySelect && atv.auditoryId === 3) {
              return (
                <Activity atv={atv}/>
              );
            }
          })}

        </div>
      </div>
    </AuditoryList>
  );
};

const AuditoryList = styled.div`
    display: flex;
    .auditoryType {
        width: 288px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .auditoryHeader {
            font-size: 17px;
            color: #7b7b7b;
            margin-bottom: 13px;
        }
        .activitiesBoxList {
            width: 100%;
            height: 390px;
            border: 1px solid #d7d7d7;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 9px;
        }
    }
`;
