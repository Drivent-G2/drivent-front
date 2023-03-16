import api from './api';

export async function getAvailableDates(token) {
  const response = await api.get('/date', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
