import axios from "axios";

let UrlsAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export {UrlsAxios}