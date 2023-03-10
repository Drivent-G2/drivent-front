import styled from 'styled-components';

export default function HotelsOptions(params) {
  const { hotelsOptionsList, hotelSelectedId, setHotelSelectedId } = params;
  return(
    <HotelsChoice>
      <span className='title'>Primeiro, escolha seu hotel</span>
      <div className='hotelsOptions'>
        {hotelsOptionsList.map(h => {
          if(h.id === hotelSelectedId) {
            return(
              <Option key={h.id} select={true} >
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
          }
          return(
            <Option key={h.id} onClick={() => setHotelSelectedId(h.id)}>
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
        })}
      </div>
    </HotelsChoice>
  );
};

const HotelsChoice = styled.div`
    margin: 36px 0 0 0;
    .title {
        font-weight: 400;
        font-size: 20px;
        color: #8e8e8e;
    }
    .hotelsOptions {
        margin: 18px 0 0 0;
        width: 100%;
        display: flex;
    }
`;

const Option = styled.div`
    background-color: ${params => params.select ? '#FFEED2' : '#EBEBEB'};
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
