import axios from 'axios';

const config = {
    headers: {
        Group: 160            
    }
}

const Post = (url, config) => {
    axios.post(url, {
        body: config,
        headers : {
            /* auth: AuthorizationTest() */
        }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    }) 
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export {Get, Post}