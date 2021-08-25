import { MOVIES_API_BASE_URL } from './config';

const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((json) => Promise.reject(json));

export const getMovies = () => {
  return fetch(`${MOVIES_API_BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    header: { 'Content-Type': 'application/json' },
  }).then(checkResponse);
};
