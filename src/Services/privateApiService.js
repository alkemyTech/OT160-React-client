import axios from "axios";
//JSON.parse
const getToken = () => {
  return (localStorage.getItem("token"));
};

const headerAuthorization = () => {
  const token = getToken();
  const headerAuthorization = { authorization: "" };
  if (token) {
    headerAuthorization.authorization = `Bearer: ${token}`;
  }
  return headerAuthorization;
};

const config = {
  headers: {
    Group: 160,
    Authorization: headerAuthorization().authorization
  },
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

export { get, post, patch };
