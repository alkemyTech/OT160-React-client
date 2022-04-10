import { post, get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/docs';
const BASE_ENDPOINT = '/contacts';

async function getContacts() {
  const response = await get(`${BASE_URL}${BASE_ENDPOINT}`);
  return response;
}

async function getContact(id) {
  const response = await get(`${BASE_URL}${BASE_ENDPOINT}/:${id}`);
  return response;
}

async function createContact(data) {
  const response = await post(`${BASE_URL}${BASE_ENDPOINT}`, data);
  return response;
}

export { createContact, getContacts, getContact };
