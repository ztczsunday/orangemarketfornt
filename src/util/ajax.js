/* 引入Axios */
import axios from 'axios'

const $ = {
    ajax: axios.create({
        baseURL: "http://localhost:8080/",
        timeout: 1000
    })
};

export default $;
