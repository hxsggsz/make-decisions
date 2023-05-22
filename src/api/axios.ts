import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
