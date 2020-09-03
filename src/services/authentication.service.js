import { serviceDefault } from './api';
import { SECRET_TOKEN } from '../utils/keys';

export const signIn = (payload) => {
  return serviceDefault('/users/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SECRET_TOKEN}`,
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });
};
