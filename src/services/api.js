import axios from "axios";
import CONFIG from "../config";

const searchMovies = (title) => {
  const {BASE_URL, API_KEY} = CONFIG;

  return axios.get(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
}

export { searchMovies };
