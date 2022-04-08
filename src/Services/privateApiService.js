import axios from 'axios';

const config = {
    headers: {
        Group: 160               //Aqui va el ID del equipo!!
    }
}

const getToken=()=>
{
	return JSON.parse(localStorage.getItem("token"));
}
const headerAuthorization = () => {
  const token = getToken();
  const headerAuthorization = {authorization: ""};
  if (!token) {
    headerAuthorization.authorization="Bearer: "+ token;
  }
  return headerAuthorization;
};

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export {Get}