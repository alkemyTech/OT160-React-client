import axios from 'axios';

const config = {
    headers: {
        Group: 160        //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Post = async (url,data) => {
   await axios.post(url,data, config)
}

const Patch = async (url,data) => {
   await axios.patch(url,data, config)
    
}



export {Post,Patch}