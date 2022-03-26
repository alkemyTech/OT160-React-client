import axios from 'axios';

const config = {
    headers: {
                        //Aqui va el ID del equipo!!
    }
}

const putUser = (userData) => {
    axios.put("https://ongapi.alkemy.org/api/users/" + userData.id, {
        body: JSON.stringify(userData),
        headers : { 
          "Content-Type": "application/json",
          'Accept': 'application/json'
         }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const postUser = (userData) =>{
    console.log(userData)
    axios.post("https://ongapi.alkemy.org/api/users",{
        body: {userData},
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));  
    }


const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export {Get, putUser, postUser}