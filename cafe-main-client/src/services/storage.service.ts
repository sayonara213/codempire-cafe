export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem('token') || '{}');
  return user.access_token;
};

export const setToken = (user: any) => {
  localStorage.setItem('token', JSON.stringify(user));
};

export const getRole = () => {
  const user = JSON.parse(localStorage.getItem('token') || '{}');
  return user.role;
};
