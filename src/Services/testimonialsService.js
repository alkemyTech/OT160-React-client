import { get } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/api';
const BASE_ENDPOINT = '/testimonials';

async function getTestimonials() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

export { getTestimonials };
