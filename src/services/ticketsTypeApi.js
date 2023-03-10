import api from './api';

export async function getTicketsType(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}; 
