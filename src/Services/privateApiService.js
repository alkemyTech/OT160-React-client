import axios from 'axios';

const config = {
    headers: {
        Group: 160                //Aqui va el ID del equipo!!
    }
}

const Get = async (url) => {
  try {
    const response = await axios.get(url, config)
    return response.data
  }

  catch (error) {
    console.log(error) // Error handling to be implemented
  }
}

const Post = async (url, data) => {
  try {
    await axios.post(url, data, config)
  }

  catch (error) {
    console.log(error) // Error handling to be implemented
  }
}

const Patch = async (url, data) => {
  try {
    await axios.patch(url, data, config)
  } 
  
  catch (error) {
    console.log(error) // Error handling to be implemented
  }
}

export { Get, Post, Patch }