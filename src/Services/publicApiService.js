import axios from 'axios';
import { errorAlert } from './alertService';
const config = {
    headers: {
        Group: 160
    }
}

const get = async(url) => {

    const response = {};

    try {
        const { data } = axios.get(url);
        response.data = data;
    } catch (err) {
        response.error = err;
        errorAlert(`Error al realizar la peticion: ${response.error.status}`,response.error.message);
    }

    return response;
}

const post = async(url,body) => {

    const response = {};

    try {
        const { data } = axios.post(`https://ongapi.alkemy.org/public/api/${url}`,body,config);
        response.data = data;
    } catch (err) {
        response.error = err;
        errorAlert(`Error al realizar la peticion: ${response.error.status}`,response.error.message);

    }

    return response;
}
