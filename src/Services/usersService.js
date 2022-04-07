import {
    get, 
    post, 
    patch

} from "./privateApiService";

const getUsers = async (config) => {
    const res = await get("https://ongapi.alkemy.org/api/users", {config});
    return res;
};

const createUser = async (config) => {
    const res = await post("https://ongapi.alkemy.org/api/users", {config});
    return res;
};

const getUserById = async (id, config) => {
    const res = await get("https://ongapi.alkemy.org/api/users" + id, {config});
    return res;
};

const updateUser = async (id, config) => {
    const res = await patch("https://ongapi.alkemy.org/api/users" + id, {config});
    return res;
};

const deleteUser = async (id, config) => {
    //waiting for delete function
};

