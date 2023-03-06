import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import React from 'react';

export default function CreditCardForm(params) {
  const { setIsCreditCardComplete } = params;
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [cardExpiry, setCardExpiry] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [focus, setFocus] = React.useState('');
    
  const validation = cardNumber.length === 16 && cardName.length >= 3 && cardExpiry.length === 4 && cvv.length === 3;
  
  function submit() {
    if( validation ) {
      setIsCreditCardComplete(true);
      console.log('Tudo válido');
    } else {
      alert('Preencha os dados corretamente!');
    }
  };
  
  return (
    <>
      <CreditCardContainer>
        <div className='creditCardInfo'>
            
          <div>
            <Cards cvc = { cvv } expiry = { cardExpiry } focused = { focus } name = { cardName } number = { cardNumber } />
          </div>

          <div className='form'>

            <div>
              <input type='tel' name='number' maxLength={16} value = { cardNumber } placeholder = 'Card Number' onChange = { e => setCardNumber(e.target.value.replace(/[A-Ça-ç!-/ ]/g, ''))} onFocus = { e => setFocus(e.target.name) }/> 
              <input type='tel' name='name' maxLength={37} value = { cardName } placeholder = 'Name' onChange = { e => setCardName(e.target.value.replace(/[A-Z0-9!-=]/, ''))} onFocus = { e => setFocus(e.target.name) }/> 
            </div>

            <div className='lowInputs' >
              <input className='validInput' type='tel' name='expiry' maxLength={4} value = { cardExpiry } placeholder = 'Valid Thru' onChange = { e => setCardExpiry(e.target.value.replace(/[A-Ça-ç!-/ ]/g, ''))} onFocus = { e => setFocus(e.target.name) }/> 
              <input className='cvvInput' maxLength={3} type='tel' name='cvc' value = { cvv } placeholder = 'CVC' onChange = { e => setCvv(e.target.value.replace(/[A-Ça-ç!-/ ]/g, ''))} onFocus = { e => setFocus(e.target.name) }/> 
            </div>

          </div>

        </div>

      </CreditCardContainer>
      <Button onClick={submit}>FINALIZAR PAGAMENTO</Button>
    </>
  );
};

const CreditCardContainer = styled.div`
  width:100%;
  margin: 30px 0 0 0;
  
  .creditCardInfo {
    width:710px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  margin: 15px 0 0 0;
  }
  .form {
    .lowInputs {
      display:flex;
      justify-content:space-between;
    }

    div {
      width:370px;
      input {
        width: 100%;
        height:50px;
        border: 1px solid #666666;
        border-radius:6px;
        padding:10px;
        font-size:20px;
        margin:7px 0 7px 0;
      }
      .validInput {
        width:200px;
      }
      .cvvInput {
        width:150px;
      }
    }
  }
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25 );
`;
