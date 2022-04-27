import { get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/api';
const BASE_ENDPOINT = '/activities';

async function getActivities() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

async function getActivity(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`, id);
}

export { getActivities, getActivity };
