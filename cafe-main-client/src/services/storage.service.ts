export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token') || 'null');
  return token;
};

export const setToken = (token: any) => {
  localStorage.setItem('token', JSON.stringify(token));
};
