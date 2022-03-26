import axios from 'axios';

const config = {
    headers: {
        Group: 160
    }
};

const get = async (url) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
     console.log(error) // Error handling to be implemented
  };
};

const post = async (url, data) => {
  try {
    await axios.post(url, data, config);
  } catch (error) {
      console.log(error) // Error handling to be implemented
  };
};

const patch = async (url, data) => {
  try {
    await axios.patch(url, data, config);
  } catch (error) {
      console.log(error) // Error handling to be implemented
  };
};

export { get, post, patch }