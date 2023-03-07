import api from './api';

export async function getTicketPaymentStatus(token, id) {
  console.log('token :', token);
  const response = await api.get('/payments?ticketId='+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
};

export async function processTicketPayment(token, id, cardParams) {
  console.log('egou na api', token, id, cardParams);
  const response = await api.post('/payments/process', {
    ticketId: id,
    cardData: { ...cardParams }
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('passou na api', response.data, response.status);

  return response.data;
};
