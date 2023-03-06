import useAsync from '../useAsync';
import useToken from '../useToken';
import getTicketPaymentStatus from '../../services/paymentApi';

export default function usePayment(id) {
  console.log('toma o id:', id);

  const token = useToken();

  const ticket = useAsync(() => getTicketPaymentStatus(token, id));

  return ticket.data;
};
