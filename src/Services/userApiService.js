import {get, patch, post} from "./privateApiService";

const getUsers = async () => {
    return await get("https://ongapi.alkemy.org/api/users");
};

const getUserById = async (userData) => {
    return await get("https://ongapi.alkemy.org/api/users" + userData.id, {userData});
};

const deleteUser = async (userData) => {
    //waiting for delete function
};

const updateUserData = (userData) => { 
    const res = patch("https://ongapi.alkemy.org/api/users/" + userData.id, userData);
    return res;
} 

const createUser = (userData) =>{ 
    const res = post("https://ongapi.alkemy.org/api/users", userData);
    return res;
} 

export {
    updateUserData, 
    createUser, 
    deleteUser, 
    getUserById, 
    getUsers
}