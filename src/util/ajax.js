/* 引入Axios */
import axios from 'axios'

const $ = axios.create({
    baseURL: "/",
    timeout: 1000,
    withCredentials: true
});
axios.defaults.withCredentials = true;
export { $ };
