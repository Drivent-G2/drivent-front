import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function PaymentConfirmed() {
  return (
    <PaymentConfirmedContainer>
      <AiFillCheckCircle size={'40px'} color={'green'}/>
      <div className='paymentConfirmedText'>
        <h2>Pagamento Confirmado!</h2>
        <h3>Prossiga para escolha de hospedagem e atividades</h3>
      </div>
    </PaymentConfirmedContainer>
  );
};

const PaymentConfirmedContainer = styled.div`
    margin-top: 15px;
    display: flex;
    .paymentConfirmedText {
        margin-left: 10px;
        font-family: 'Roboto';
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-weight: bold;
        }
    }
`;
