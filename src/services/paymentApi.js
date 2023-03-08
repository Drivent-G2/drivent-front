import api from './api';

export async function getTicketPaymentStatus(token, id) {
  const response = await api.get('/payments?ticketId='+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
};

export async function processTicketPayment(token, id, cardParams) {
  const response = await api.post('/payments/process', {
    ticketId: id,
    cardData: { ...cardParams }
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
