import axios from 'axios';

const config = {
  
    headers: {
        Group: 160, //Aqui va el ID del equipo!!
    },

};

const getToken = () => {
  return (localStorage.getItem("token"));
};

const headerAuthorization = () => {
  const token = getToken();
  const headerAuthorization = { Authorization: '' };
  if (token) {
    headerAuthorization.Authorization = `Bearer: ${token}`;
  }
  return headerAuthorization;
};

const buildHeaders = (requestConfig) => {
  const authHeader = headerAuthorization();

  Object.assign(requestConfig.headers, authHeader);
};

const get = async ( url, id=null) => {
  const response = {};
  const requestConfig = { ...config };
  
  buildHeaders(requestConfig);

  try {
    const axiosRes =  await axios.get(`${url}/${id}`, requestConfig);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

const post = async (url, data) => {
  const response = {};
  const requestConfig = { ...config };

  buildHeaders(requestConfig);
  try {
    const axiosRes = await axios.post(url, data, requestConfig);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

const patch = async (url, data) => {
  const response = {};

  try {
    const axiosRes = await axios.patch(url, data, config);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

const put = async (url, id, data) => {
  const response = {};
  const requestConfig = { ...config };

  buildHeaders(requestConfig);
  
  try {
    const axiosRes = await axios.put(url, id, data, requestConfig);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

const remove = async (url, id) => {
  const response = {};
  const requestConfig = { ...config };

  buildHeaders(requestConfig);

  try {
    const axiosRes = await axios.delete(`${url}/${id}`, requestConfig);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

export { get, post, patch, remove, put };

