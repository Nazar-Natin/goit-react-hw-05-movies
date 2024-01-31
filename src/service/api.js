import axios from 'axios';

const URL_TREND = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_DETAILS = 'https://api.themoviedb.org/3/movie/';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

const API_KEY = 'c0984e69b17373099a1927de98b2e088';

async function fetchTrend() {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  });

  return axios.get(`${URL_TREND}?${params}`).then(({ data }) => data);
}

async function fetchDetails(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}?${params}`).then(({ data }) => data);
}

async function fetchCast(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios
    .get(`${URL_DETAILS}/${id}/credits?${params}`)
    .then(({ data }) => data);
}

async function fetchReview(id) {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios
    .get(`${URL_DETAILS}/${id}/reviews?${params}`)
    .then(({ data }) => data);
}

async function fetchSearch(query) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    query: query,
    page: '1',
  });

  return axios.get(`${URL_SEARCH}?${params}`).then(({ data }) => data);
}

export { fetchTrend, fetchDetails, fetchCast, fetchReview, fetchSearch };
