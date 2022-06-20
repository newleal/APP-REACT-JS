import axios from 'axios';

const axiosInstance = axios.create({
    //baseURL:'http://localhost:4000/'
    baseURL: 'https://app-inventario-node.herokuapp.com/'
});

export {
    axiosInstance
}