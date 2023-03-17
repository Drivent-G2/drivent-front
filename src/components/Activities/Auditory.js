import styled from 'styled-components';

export default function Auditorys(params) {
  return(
    <>
      <AuditoryType>
        <h1 className='auditoryType'>Auditório Principal</h1>
        <div className='activitiesBoxList'></div>
      </AuditoryType>
    </>
  );
};

const AuditoryType = styled.div`
    background-color: red;
    width: 288px;
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .auditoryType {
        font-size: 17px;
        color: #7b7b7b;
        margin-bottom: 12px;
    }
    .activitiesBoxList {
        width: 100px;
        height: 100px;
        background-color: yellow;
    }
`;
