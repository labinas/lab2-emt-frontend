import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        'Access-Control-Allow-Origin' : '*',
    }
})

export default instance;
