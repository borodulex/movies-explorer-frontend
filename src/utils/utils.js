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
