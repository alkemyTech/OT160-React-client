import axios from 'axios';

const config = {
    headers: {
        Group: 160
    }
}

const putUser = (userData) => {
    axios({
        method: "PUT",
        url: "https://ongapi.alkemy.org/api/users/" + userData.id,
        data: userData
    }); 
}



const postUser = (userData) =>{
     axios({
        method: "POST",
        url: "https://ongapi.alkemy.org/api/users",
        data: userData
    }); 
}


const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export {Get, putUser, postUser}