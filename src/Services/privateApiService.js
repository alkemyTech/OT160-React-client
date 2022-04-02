import axios from 'axios';

const config = {
    headers: {
        Group: 160                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const Post =(url, activitie)=>{
    let respuesta ={};
    axios.post(url, activitie)
    .then(res => respuesta.data = res)
    .catch(err => console.log(err))

    return respuesta;
}

export const Patch =(url, activitie)=>{
    axios.patch(url, activitie)
}

export default Get