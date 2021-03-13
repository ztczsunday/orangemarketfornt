/* 引入Axios */
import axios from 'axios'

const $ = axios.create({
    baseURL: "/api",
    timeout: 1000,
    withCredentials: false
});

export { $ };
