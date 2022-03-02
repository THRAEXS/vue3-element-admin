import Cookies from 'js-cookie';

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

export const getToken = _ => Cookies.get(TOKEN_KEY);

export const setToken = token => Cookies.set(TOKEN_KEY, token);

export const removeToken = _ => Cookies.remove(TOKEN_KEY);

export default { getToken, setToken, removeToken };
