import { post, get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/docs';

async function getContacts() {
  const response = await get(`${BASE_URL}/contacts`);
  return response;
}

async function getContact(id) {
  const response = await get(`${BASE_URL}/contacts/:${id}`);
  return response;
}

async function createContact(data) {
  const response = await post(`${BASE_URL}/contacts`, data);
  return response;
}

export { createContact, getContacts, getContact };
