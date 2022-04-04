import {
    get, 
    post, 
    patch

} from "./privateApiService";

const getUsers = (config) => {
    get("https://ongapi.alkemy.org/api/users", {config});
};

const postUsers = (config) => {
    post("https://ongapi.alkemy.org/api/users", {config});
};

const getUserById = (id, config) => {
    get("https://ongapi.alkemy.org/api/users" + id, {config});
};

const putUser = (id, config) => {
    patch("https://ongapi.alkemy.org/api/users" + id, {config});
};

const deleteUser = (id, config) => {
    //Delete("https://ongapi.alkemy.org/api/users" + id, {config});
};

