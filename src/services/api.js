import axios from "axios";
import CONFIG from "../config";

const getMovies = () => {
  const { BASE_URL, API_KEY } = CONFIG;

  return axios.get(`${BASE_URL}?s=marvel&apikey=${API_KEY}`);
};

const searchMovies = (title) => {
  const { BASE_URL, API_KEY } = CONFIG;

  return axios.get(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
};

export { getMovies, searchMovies };
