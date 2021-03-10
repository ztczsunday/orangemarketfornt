/* 引入Axios */
import axios from 'axios'

const $ = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000
});

export { $ };
