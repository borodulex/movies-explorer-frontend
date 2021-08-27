import { MAIN_API_BASE_URL } from './config';

const config = {
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
};

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const register = (name, email, password) => {
  console.log({ name, email, password });
  return fetch(`${MAIN_API_BASE_URL}/signup`, {
    ...config,
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_API_BASE_URL}/signin`, {
    ...config,
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const signout = () => {
  return fetch(`${MAIN_API_BASE_URL}/signout`, {
    ...config,
    method: 'POST',
  }).then(checkResponse);
};

export const getBio = () => {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
    ...config,
    method: 'GET',
  }).then(checkResponse);
};

export const updateBio = (name, email) => {
  return fetch(`${MAIN_API_BASE_URL}/users/me`, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${MAIN_API_BASE_URL}/movies`, {
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
  return fetch(`${MAIN_API_BASE_URL}/movies`, {
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
  return fetch(`${MAIN_API_BASE_URL}/${movieId}`, {
    ...config,
    method: 'DELETE',
  }).then(checkResponse);
};
