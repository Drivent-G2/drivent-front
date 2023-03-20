import api from './api';

export async function getAvailableDates(token) {
  const response = await api.get('/date', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getActivitiesByDay(token, dateId) {
  const response = await api.get(`/activity/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getUserBookingActivities(token) {
  const response = await api.get('/bookingActivity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postBookingActivity(token, body) {
  const response = await api.post('/bookingActivity', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
