import axios from 'axios';

export const instance = axios.create({
    baseUrl: "https://localhost:5001/",
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});