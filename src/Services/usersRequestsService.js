/// import functions from privateApi
const Get = () => {}
const Post = () => {}
const GetId = () => {}
const Put = () => {}
const Delete = () => {}

const getUsers = (config) => {
    Get("https://ongapi.alkemy.org/api/users", {config});
};

const postUsers = (config) => {
    Post("https://ongapi.alkemy.org/api/users", {config});
};

const getByUserId = (id, config) => {
    GetId("https://ongapi.alkemy.org/api/users" + id, {config});
};

const putUser = (id, config) => {
    Put("https://ongapi.alkemy.org/api/users" + id, {config});
};

const deleteUser = (id, config) => {
    Delete("https://ongapi.alkemy.org/api/users" + id, {config});
};

