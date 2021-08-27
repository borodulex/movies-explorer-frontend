export const isObjEmpty = (obj) => {
  for (var i in obj) return false;
  return true;
};
