export const getToken = () => {
  return sessionStorage.getItem('token') || null;
};

export const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
};
