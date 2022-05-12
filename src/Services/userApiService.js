import {get, patch, post, remove} from "./privateApiService";

const USERS_URL = "https://ongapi.alkemy.org/api/users/";

const getUsers = async () => {
    return await get(USERS_URL);
};

const getUserById = async (userData) => {
    return await get(USERS_URL + userData.id);
};

const deleteUser = async (userData) => {
    return await remove(USERS_URL, userData.id);
};

const updateUserData = (userData) => { 
    return patch(USERS_URL + userData.id, userData);
} 

const createUser = (userData) =>{ 
    return post(USERS_URL, userData);
} 

export {
    updateUserData, 
    createUser, 
    deleteUser, 
    getUserById, 
    getUsers
}