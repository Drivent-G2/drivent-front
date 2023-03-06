import api from './api';

export default async function getTicketPaymentStatus(token, id) {
  const response = await api.get('/payments?ticketId='+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
};
