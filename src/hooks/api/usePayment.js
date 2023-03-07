import useAsync from '../useAsync';
import useToken from '../useToken';
import { getTicketPaymentStatus, processTicketPayment } from '../../services/paymentApi';

export function usePayment(id) {
  const token = useToken();

  const ticket = useAsync(() => getTicketPaymentStatus(token, id));

  return ticket.data;
};

export async function useProcessTicketPayment(id, cardParams) {
  const token = useToken();

  console.log('chegou no processameto do ticket, toma id e card', id, cardParams, token);

  const paymentProcess = await processTicketPayment(token, id, cardParams);

  console.log('processou tudo');

  return paymentProcess;
}
