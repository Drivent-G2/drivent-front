import styled from 'styled-components';
import { getHotelsInfo } from '../../hooks/api/useHotel';

export default function HotelInfo(params) {
  const { h, setHotelSelectedId } = params;

  const talver = getHotelsInfo();
  
  console.log( 'talvez', talver);

  return(
    <Option key={h.id} select={true} onClick={() => setHotelSelectedId(h.id)} selec={params.select} >
      <img src={h.image} alt=''/>
      <h1> {h.name} </h1>
      <div>
        <h2>Tipos de acomodação:</h2>
        <h3>Single e Double</h3>
      </div>
      <div>
        <h2>Vagas disponíveis:</h2>
        <h3>Single e Double</h3>
      </div>
    </Option>
  );
};

const Option = styled.div`
    background-color: ${params => params.selec ? '#FFEED2' : '#EBEBEB'};
    width: 196px;
    height: 264px;
    padding: 14px;
    box-sizing:border-box;
    margin-right: 19px;
    border-radius: 10px;
    img {
        width: 168px;
        height: 109px;
        border-radius: 5px;
    }
    h1 {
        margin: 10px 0;
        font-size: 20px;
        font-weight: 400;
    }
    div {
        margin-bottom: 14px;
    }
    h2 {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 4px;
    }
    h3 {
        font-size:12px;
        font-weight: 400;
    }
`;
