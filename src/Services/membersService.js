import { post, get, patch } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/api';

async function getMembers() {
  return await get(`${BASE_URL}${process.env.REACT_APP_GET_MEMBERS_API}`);
}

async function getMember(id) {
  return await get(
    `${BASE_URL}${process.env.REACT_APP_GET_MEMBER_BY_ID_API}`,
    id
  );
}

async function createMember(memberDetails) {
  return await post(
    `${BASE_URL}${process.env.REACT_APP_CREATE_MEMBER_API}`,
    memberDetails
  );
}

async function editMember(memberDetails) {
  return await patch(
    `${BASE_URL}${process.env.REACT_APP_EDIT_MEMBER_API}`,
    memberDetails
  );
}

export { getMembers, getMember, createMember, editMember };
