import { useEffect } from 'react';
import styled from 'styled-components';

export default function Auditorys(params) {
  const { daySelect, dayActivities } = params;
  console.log(dayActivities);

  return(
    <>
      <AuditoryContainer>
        
        <AuditoryType>
          <h1 className='auditoryTypeName'>Auditório Principal</h1>
          <ActivitiesBoxList>
            <div className='activity'></div>
          </ActivitiesBoxList>
        </AuditoryType>

        <AuditoryType>
          <h1 className='auditoryTypeName'>Auditório Lateral</h1>
          <ActivitiesBoxList>
            <div className='activity'></div>
          </ActivitiesBoxList>
        </AuditoryType>

        <AuditoryType>
          <h1 className='auditoryTypeName'>Sala de Workshop</h1>
          <ActivitiesBoxList>
            <div className='activity'></div>
          </ActivitiesBoxList>
        </AuditoryType>

      </AuditoryContainer>
    </>
  );
};

const AuditoryContainer = styled.div`
  display: flex;
`;

const AuditoryType = styled.div`
    width: 288px;
    height: 390px;
    display: flex;
    border: #7b7b7b;
    flex-direction: column;
    align-items: center;
    .auditoryTypeName {
        font-size: 17px;
        color: #7b7b7b;
        margin-bottom: 12px;
    }
`;

const ActivitiesBoxList = styled.div`
    display: flex;
    flex-direction: column;
    .activity {
      width: 265px;
      height: 79px;
      background: #F1F1F1;
      border-radius: 5px;
    }
`;

