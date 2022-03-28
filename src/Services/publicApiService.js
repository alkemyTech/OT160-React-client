import axios from 'axios';

const config = {
    headers: {
        Group: 160                
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

const Post=async(url,data)=>{
    try {
     
   const response = await axios.post(`https://ongapi.alkemy.org/public/api/${url}`,data,config);
   return response

    } catch (error) {
        return error
    }
}


export {Post,Get}