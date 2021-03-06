import { get } from './privateApiService';

const BASE_URL = "https://ongapi.alkemy.org/public/api";
const BASE_ENDPOINT_ORGANIZATION = `/organization`;

const Id = 1;

async function getDataOrganization() {
       return await get(`${BASE_URL}${BASE_ENDPOINT_ORGANIZATION}`, Id);
};

export { getDataOrganization };