import {patch, post} from "./privateApiService";

const updateUserData = (userData) => { 
    const res = patch("https://ongapi.alkemy.org/api/users/" + userData.id, userData);
    return res;
} 

const createUser = (userData) =>{ 
    const res = post("https://ongapi.alkemy.org/api/users", userData);
    return res;
} 

export {updateUserData, createUser}