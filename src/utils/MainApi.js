const BASE_URL = 'https://movies-explorer-borodulex.nomoredomains.club/api';

const config = {
  credentials: 'include',
  header: { 'Content-Type': 'application/json' },
};

const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((json) => Promise.reject(json));

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    ...config,
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    ...config,
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    ...config,
    method: 'GET',
  }).then(checkResponse);
};

export const getBio = () => {
  return fetch(`${BASE_URL}/users/me`, {
    ...config,
    method: 'GET',
  }).then(checkResponse);
};

export const updateBio = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    ...config,
    method: 'GET',
  }).then(checkResponse);
};

export const saveMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  movieId,
  nameRU,
  nameEN
) => {
  return fetch(`${BASE_URL}/movies`, {
    ...config,
    method: 'POST',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    }),
  }).then(checkResponse);
};

export const removeMovie = (movieId) => {
  return fetch(`${BASE_URL}/${movieId}`, {
    ...config,
    method: 'DELETE',
  }).then(checkResponse);
};
