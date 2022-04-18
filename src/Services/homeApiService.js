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

async function createNews(newsData) {
  return await post(`${BASE_URL}${BASE_ENDPOINT_NEWS}`, newsData);
};

async function updateNewsData(newsData, id) {
  return await put(`${BASE_URL}${BASE_ENDPOINT_NEWS}/:${id}`, newsData);
};

async function deleteNewsData(newsData, id) {
  return await remove(`${BASE_URL}${BASE_ENDPOINT_NEWS}/:${id}`, newsData);
};

async function getSlides() {
  return await get(`${BASE_URL}${BASE_ENDPOINT_SLIDES}`);
};

async function getSlidesId(id) {
  return await get(`${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`);
};

async function createSlides(slidesData) {
  return await post(`${BASE_URL}${BASE_ENDPOINT_SLIDES}`, slidesData);
};

async function updateSlidesData(slidesData, id) {
  return await put(`${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`, slidesData);
};

async function deleteSlidesData(slidesData, id) {
  return await remove(`${BASE_URL}${BASE_ENDPOINT_SLIDES}/:${id}`, slidesData);
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
