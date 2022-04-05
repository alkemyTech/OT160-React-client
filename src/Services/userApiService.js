import {patch, post} from "./privateApiService";
const updateUserData = (userData) => { 
    patch("https://ongapi.alkemy.org/api/users/" + userData.id, userData);
} 

const createUser = (userData) =>{ 
    post("https://ongapi.alkemy.org/api/users", userData);
} 

export {updateUserData, createUser}