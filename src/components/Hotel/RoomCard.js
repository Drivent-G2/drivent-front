import { useEffect, useState } from 'react';
import styled from 'styled-components';
import person from '../../assets/images/person.png';
import personBlack from '../../assets/images/person_black.png';
import personPink from '../../assets/images/person_pink.png';

export default function RoomCard({ roomName, roomCapacity, roomId, roomsGuests }) {
  const [capacityArr, setCapacityArr] = useState([]);
  const [color, setColor] = 
  useEffect(() => {
    const { guests } = roomsGuests.filter((r) => roomId===r.id);

    const arr = [];
    for(let cont=0; cont<roomCapacity; cont++) {
      arr.push(cont);
    }
    setCapacityArr(arr);
  }, []);

  return(
    <CardContainer>
      <h2 className='roomName'>{roomName}</h2>
      <div className='capacity'>
        {capacityArr.map((c, i) => {
          return (
            <img key={i} src={person} alt='person-icon'/>
          );
        })}
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 190px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #CECECE;
  border-radius: 10px;
  background-color: white;
  .capacity{
    display: flex;
    gap: 3px;
  }
  .roomName{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #454545;
  }
`;
