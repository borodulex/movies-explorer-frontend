import { isURL } from 'validator';

import { MOVIES_API_BASE_URL } from './config.js';

export const isObjEmpty = (obj) => {
  for (var i in obj) return false;
  return true;
};

export const sortArrayOfObjectByProperty = (obj, objProp) => {
  return [...obj].sort((a, b) => a[objProp].localeCompare(b[objProp]));
};

export const filterShortMovies = (movieList) => {
  return movieList.filter((item) => item.duration <= 40);
};

export const parseMoviesApiResponse = (data) => {
  return data.map((item) => {
    return {
      country: item.country || 'Unknown',
      director: item.director || 'Unknown',
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: MOVIES_API_BASE_URL + item.image.url,
      trailer: isURL(item.trailerLink || '')
        ? item.trailerLink
        : `https://www.youtube.com/results?search_query=${item.nameRU}`,
      thumbnail: MOVIES_API_BASE_URL + item.image.formats.thumbnail.url,
      movieId: item.id,
      nameRU: item.nameRU.trim(),
      nameEN: item.nameEN?.trim() || 'Unknown',
    };
  });
};

export const filterMovies = (cards, query) => {
  return cards.filter(
    (item) =>
      item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      (item.nameEN && item.nameEN.toLowerCase().includes(query.toLowerCase()))
  );
};

export const markSavedMovies = (movieList, savedMovieList) => {
  return movieList.map((movie) => {
    let savedMovieId;
    return savedMovieList.find((savedMovie) => {
      if (savedMovie.movieId === movie.movieId && !savedMovie.isSaved) {
        savedMovieId = savedMovie._id;
        return true;
      } else {
        return false;
      }
    })
      ? { isSaved: true, _id: savedMovieId, ...movie }
      : movie;
  });
};
