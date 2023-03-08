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

  const paymentProcess = await processTicketPayment(token, id, cardParams);

  return paymentProcess;
}
