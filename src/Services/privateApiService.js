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

export const PostActivitie =(activitie)=>{
    const respuesta ='';
    axios.post('https://jsonplaceholder.typicode.com/activities/create', activitie)
    .then(res => respuesta = res)
    .catch(err => console.log(err))

    return respuesta;
}

export const PatchActivitie =(id, activitie)=>{
    axios.patch(`https://jsonplaceholder.typicode.com/activities/:${id}`, activitie)
}

export default Get