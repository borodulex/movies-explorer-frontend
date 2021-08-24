const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((json) => Promise.reject(json));

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    header: { 'Content-Type': 'application/json' },
  }).then(checkResponse);
};
