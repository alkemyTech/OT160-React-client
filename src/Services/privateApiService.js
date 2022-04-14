import axios from 'axios';

const config = {
  headers: {
    Group: 160,
  },
};

const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
};

const headerAuthorization = () => {
  const token = getToken();
  const headerAuthorization = { Authorization: '' };
  if (token) {
    headerAuthorization.Authorization = `Bearer: ${token}`;
  }
  return headerAuthorization;
};

const headersBuilder = () => {
  const requestConfig = { ...config };
  const auth = headerAuthorization();
  requestConfig.headers = { ...requestConfig.headers, ...auth };

  return requestConfig;
};

const get = async (url) => {
  const response = {};

  try {
    const axiosRes = await axios.get(url, config);
    response.data = axiosRes.data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

const post = async (url, data) => {
  const response = {};

  try {
    const axiosRes = await axios.post(url, data, config);
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

const remove = async (url, id) => {
  const requestConfig = headersBuilder();
  const response = {};

  try {
    const axiosRes = await axios.delete(`${url}/${id}`, requestConfig);
    response.data = axiosRes;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

export { get, post, patch, remove };
