import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function RegisteredActivity(params) {
  const { atv } = params;
  return (
    <RegisteredActivityContainer height={(atv.endsAt - atv.startsAt)/60} >
      <div className="info">
        <span>{atv.name}</span>
        <span className="activityDuration">
          {atv.startsAt / 60}:00 - {atv.endsAt / 60}:00
        </span>
      </div>
      <div className="vagas">
        {<AiOutlineCheckCircle />}
        Inscrito
      </div>
    </RegisteredActivityContainer>
  );
}

const RegisteredActivityContainer = styled.div`
  width: 265px;
  height: ${(params) => (params.height > 0 ? params.height * 80 + 'px' : '79px')};
  background-color: #D0FFDB;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  .info {
    width: 190px;
    height: 60px;
    display: flex;
    flex-direction: column;
    border-right: 3px solid #99E8A1;
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
    color: #078632;
    font-weight: 700;
    svg {
      font-size: 30px;
      margin-bottom: 3px;
    }
  }
`;
