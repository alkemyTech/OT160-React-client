import { get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/api';
const BASE_ENDPOINT = '/news';

async function getNews() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

export { getNews };
