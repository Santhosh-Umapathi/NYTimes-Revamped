import axios from "axios";
//Constants
const API_KEY = "&api-key=" + process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export const api = async ({ url = "", query = "", fields = "" }) => {
  const q = "?q=" + query;
  const fl = "&fl=" + fields;
  const response = await axios.get(BASE_URL + q + fl + API_KEY);

  return response.data;
};
