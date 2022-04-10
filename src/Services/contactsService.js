import { post, get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/docs';
const BASE_ENDPOINT = '/contacts';

async function getContacts() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

async function getContact(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT}/:${id}`);
}

async function createContact(contactDetails) {
  return await post(`${BASE_URL}${BASE_ENDPOINT}`, contactDetails);
}

export { getContacts, getContact, createContact };
