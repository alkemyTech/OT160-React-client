import axios from 'axios';

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

export {putUser, postUser}