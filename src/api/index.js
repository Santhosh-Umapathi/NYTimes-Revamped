import axios from "axios";
//Constants
const API_KEY = "&api-key=" + process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export const api = async ({
  query = "",
  fields = "",
  page = 0,
  filterQuery = "",
}) => {
  const q = query && "?q=" + query;
  const fl = fields && "&fl=" + fields;
  const pg = "&page=" + page;
  const fq = filterQuery && "?fq=" + filterQuery;
  const response = await axios.get(BASE_URL + q + fq + fl + pg + API_KEY);

  return response.data;
};
