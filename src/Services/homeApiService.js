import { get, post, put, remove } from "./privateApiService";

const BASE_URL = "https://ongapi.alkemy.org/docs";
const BASE_ENDPOINT_NEWS = "/news";
const BASE_ENDPOINT_SLIDES = "/slides";

async function getNews() {
  return await get(`${BASE_URL}${BASE_ENDPOINT_NEWS}`);
};

async function getNewsId(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT_NEWS}/:${id}`);
};

async function createNews(newDetails) {
  return await post(`${BASE_URL}${BASE_ENDPOINT_NEWS}`, newDetails);
};

async function updateNewsData(newDetails, id) {
  return await put(`${BASE_URL}${BASE_ENDPOINT_NEWS}/:${id}`, newDetails);
};

async function deleteNewsData(newDetails, id) {
  return await remove(`${BASE_URL}${BASE_ENDPOINT_NEWS}/:${id}`, newDetails);
};

async function getSlides() {
  return await get(`${BASE_URL}${BASE_ENDPOINT_SLIDES}`);
};

async function getSlidesId(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`);
};

async function createSlides(slidesDetails) {
  return await post(`${BASE_URL}${BASE_ENDPOINT_SLIDES}`, slidesDetails);
};

async function updateSlidesData(slidesDetails, id) {
  return await put(`${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`, slidesDetails);
};

async function deleteSlidesData(slidesDetails, id) {
  return await remove(
    `${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`,
    slidesDetails
  );
};

export {
  getNews,
  getNewsId,
  createNews,
  updateNewsData,
  deleteNewsData,
  getSlides,
  getSlidesId,
  createSlides,
  updateSlidesData,
  deleteSlidesData,
};
