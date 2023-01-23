import axios from 'axios';

console.log(import.meta.env);
const API_URL = import.meta.env.VITE_APP_API_URL;
const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

if (!API_URL || !API_TOKEN) {
  throw new Error('No API_URL or API_TOKEN');
}
export const apiRequest = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: 'bearer ' + API_TOKEN,
  },
});
