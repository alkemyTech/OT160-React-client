import axios from 'axios';

const config = {
    headers: {
        Group: 160
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

const post = async(url,body) => {

    const response = {};

    try {
        const { data } = axios.post(`https://ongapi.alkemy.org/public/api/${url}`,body,config);
        response.data = data;
    } catch (err) {
        response.error = err;
    }

    return response;
}

export { post, Get }