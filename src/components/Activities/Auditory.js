import styled from 'styled-components';

export default function Auditorys(params) {
  return(
    <AuditoryList>
      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Auditório Principal</h1>
        <div className='activitiesBoxList'>
          <Activity/>
        </div>
      </div>

      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Auditório Lateral</h1>
        <div className='activitiesBoxList'>
          <Activity/>
        </div>
      </div>

      <div className='auditoryType'>
        <h1 className='auditoryHeader'>Sala de Workshop </h1>
        <div className='activitiesBoxList'>
          <Activity/>
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

const Activity = styled.div`
    width: 256px;
    height: 79px;
    background-color: #f1f1f1;
    border-radius: 5px;
`;
