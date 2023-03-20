import styled from 'styled-components';
import Activity from './Activity';
import RegisteredActivity from './RegisteredActivity';
import { postBookingActivity } from '../../services/activitiesApi';

export default function Auditorys(params) {
  const { daySelect, dayActivities, userActivities } = params;

  async function reserveActivity(token, activityId) {
    try {
      await postBookingActivity(token, { activityId });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuditoryList>
      <div className="auditoryType">
        <h1 className="auditoryHeader">Auditório Principal</h1>

        <div className="activitiesBoxList">
          {dayActivities.map((atv) => {
            if(userActivities.includes(atv.id) && atv.Auditory.auditoryName === 'Auditório Principal') {
              return <RegisteredActivity key={atv.id} atv={atv}/>;
            }
            if (atv.dateId === daySelect && atv.Auditory.auditoryName === 'Auditório Principal') {
              return <Activity key={atv.id} reserveActivity={reserveActivity}  atv={atv} />;
            }
          })}
        </div>
      </div>

      <div className="auditoryType">
        <h1 className="auditoryHeader">Auditório Lateral</h1>
        <div className="activitiesBoxList">
          {dayActivities.map((atv) => {
            if(userActivities.includes(atv.id) && atv.Auditory.auditoryName === 'Auditório Lateral') {
              return <RegisteredActivity key={atv.id} atv={atv}/>;
            }
            if (atv.dateId === daySelect && atv.Auditory.auditoryName === 'Auditório Lateral') {
              return <Activity key={atv.id} reserveActivity={reserveActivity} atv={atv} />;
            }
          })}
        </div>
      </div>

      <div className="auditoryType">
        <h1 className="auditoryHeader">Sala de Workshop </h1>
        <div className="activitiesBoxList">
          {dayActivities.map((atv) => {
            if(userActivities.includes(atv.id) && atv.Auditory.auditoryName === 'Sala de Workshop') {
              return <RegisteredActivity key={atv.id} atv={atv}/>;
            }
            if (atv.dateId === daySelect && atv.Auditory.auditoryName === 'Sala de Workshop') {
              return <Activity key={atv.id} reserveActivity={reserveActivity} atv={atv} />;
            }
          })}
        </div>
      </div>
    </AuditoryList>
  );
}

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
