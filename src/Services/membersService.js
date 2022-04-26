import { post, get, patch } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/api';
const BASE_ENDPOINT = '/members';

async function getMembers() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

async function getMember(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`, id);
}

async function createMember(memberDetails) {
  return await post(`${BASE_URL}${BASE_ENDPOINT}`, memberDetails);
}

async function editMember(memberDetails) {
  return await patch(`${BASE_URL}${BASE_ENDPOINT}`, memberDetails);
}

export { getMembers, getMember, createMember, editMember };
