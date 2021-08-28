export const isObjEmpty = (obj) => {
  for (var i in obj) return false;
  return true;
};

export const sortArrayOfObjectByProperty = (data, objProp) => {
  return [...data].sort((a, b) => a[objProp].localeCompare(b[objProp]));
};
