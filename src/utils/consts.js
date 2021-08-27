export const CREATED = 201;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const CONFLICT = 409;
export const INTERNAL_SERVER_ERROR = 500;

export const sideBarNavData = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Фильмы',
    path: '/movies',
  },
  {
    name: 'Сохранённые фильмы',
    path: '/saved-movies',
  },
];

export const mainNavData = [
  {
    name: 'Фильмы',
    path: '/movies',
  },
  {
    name: 'Сохранённые фильмы',
    path: '/saved-movies',
  },
];

const requestErrorsOther = {
  [NOT_FOUND]: 'Страница по указанному маршруту не найдена.',
  [INTERNAL_SERVER_ERROR]: 'На сервере произошла ошибка.',
};

export const requestErrorsRegister = {
  ...requestErrorsOther,
  [BAD_REQUEST]: 'При регистрации пользователя произошла ошибка.',
  [CONFLICT]: 'Пользователь с таким email уже существует.',
};

export const requestErrorsLogin = {
  ...requestErrorsOther,
  [UNAUTHORIZED]: 'Вы ввели неправильный логин или пароль.',
};

export const requestErrorsProfile = {
  ...requestErrorsOther,
  [BAD_REQUEST]: 'При обновлении профиля произошла ошибка.',
  [CONFLICT]: 'Пользователь с таким email уже существует.',
};
