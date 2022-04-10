import { post } from './privateApiService';

const BASE_URL = `${process.env.REACT_APP_BASE_URL_API}`;

async function submitContactForm(data) {
  const endpoint = `${process.env.REACT_APP_SEND_CONTACT_FORM_API}`;
  const postResult = await post(`${BASE_URL}${endpoint}`, data);
  return postResult;
}

export { submitContactForm };
