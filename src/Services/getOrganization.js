import { get } from '../Services/privateApiService';

const BASE_URL = "https://ongapi.alkemy.org/public/api";
const BASE_ENDPOINT_ORGANIZATION = `/organization`;


async function getDataOrganization() {
       return await get(`${BASE_URL}${BASE_ENDPOINT_ORGANIZATION}`);
    };
    

/* async function getDataOrganizationId(id) {
      if (id == null) {
       id = 1;  
       return await get(`${BASE_URL}${BASE_ENDPOINT_ORGANIZATION}/:${id}`);
      }
    }; */

  export { getDataOrganization };