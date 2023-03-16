import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import person from '../../assets/images/person.png';
import personBlack from '../../assets/images/person_black.png';
import personPink from '../../assets/images/person_pink.png';
import BookingContext from '../../contexts/BookingContext';

export default function RoomCard({ roomName, roomCapacity, roomId, guestsNumber }) {
  const [capacityArr, setCapacityArr] = useState([]);
  const { selectedRoom, setSelectedRoom, setPeopleNumber } = useContext(BookingContext);
  const [button, setButton] = useState(false);
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (guestsNumber) {
      const guestRoom = guestsNumber.filter((g) => roomId === g.id);
      let { guests } = guestRoom[0];
      console.log(guests);
      if (roomCapacity === guests) setButton(true);

      if (selectedRoom !== roomId) setColor('white');

      const iconArr = [];

      for (let cont = 0; cont < roomCapacity; cont++) {
        if (guests > 0) {
          iconArr.push(<img key={cont} src={personBlack} alt="person-black" />);
          guests--;
        } else if (cont === roomCapacity - 1 && selectedRoom === roomId) {
          iconArr.push(<img key={cont} src={personPink} alt="person-pink" />);
          setColor('#FFEED2');
          setPeopleNumber(guests);
        } else iconArr.push(<img key={cont} src={person} alt="person-white" />);
      }

      setCapacityArr(iconArr);
    }
  }, [guestsNumber, selectedRoom]);

  return (
    <>
      {button ? (
        <CardContainer disabled>
          <h2 className="roomName">{roomName}</h2>
          <div className="capacity">{capacityArr.map((c, i) => c)}</div>
        </CardContainer>
      ) : (
        <CardContainer
          onClick={() => {
            setSelectedRoom(roomId);
            setColor('#FFEED2');
          }}
          color={color}
        >
          <h2 className="roomName">{roomName}</h2>
          <div className="capacity">{capacityArr.map((c, i) => c)}</div>
        </CardContainer>
      )}
    </>
  );
}

const CardContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 190px;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #cecece;
  border-radius: 10px;
  background-color: ${(params) => params.color};
  position: relative;
  cursor: pointer;
  .capacity {
    display: flex;
    gap: 3px;
  }
  .roomName {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #454545;
  }
  &:disabled,
  &[disabled] {
    opacity: 60%;
    background: #e9e9e9;
  }
`;
