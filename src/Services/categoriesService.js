import { post, get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/docs';
const BASE_ENDPOINT = '/categories';

async function getCategories() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

async function getCategory(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT}/:${id}`);
}

async function createCategory(categoryDetails) {
  return await post(`${BASE_URL}${BASE_ENDPOINT}`, categoryDetails);
}

export { getCategories, getCategory, createCategory };
