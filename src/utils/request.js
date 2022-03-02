import axios from 'axios';

console.log('request:', import.meta.env);

const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 60000
});

export default instance;
