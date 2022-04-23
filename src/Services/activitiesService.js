import { post, get,put,remove } from './privateApiService';

const BASE_URL = 'https://ongapi.alkemy.org/docs';
const BASE_ENDPOINT = '/activities';

async function showActivities() {
  return await get(`${BASE_URL}${BASE_ENDPOINT}`);
}

async function showActivityByid(id) {
    return await get(`${BASE_URL}${BASE_ENDPOINT}`,id);
  }
async function createActivity(data) {
  return await post(`${BASE_URL}${BASE_ENDPOINT}/`,data);
}

async function updateActivity(id,data) {
  return await put(`${BASE_URL}${BASE_ENDPOINT}`,id,data);
}

async function deleteActivity(id) {
  return await remove(`${BASE_URL}${BASE_ENDPOINT}`,id);
}

export{showActivities,showActivityByid,createActivity,updateActivity,deleteActivity,}