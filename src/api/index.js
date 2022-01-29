import axios from "axios";
//Constants
import { API_KEY, BASE_URL } from "../constants";

export const api = async ({
  query = "",
  fields = "",
  page = 0,
  filterQuery = "",
  cancelToken,
}) => {
  try {
    const q = query && "?q=" + query;
    const fl = fields && "&fl=" + fields;
    const pg = "&page=" + page;
    const fq = filterQuery && "?fq=" + filterQuery;
    const response = await axios.get(BASE_URL + q + fq + fl + pg + API_KEY, {
      cancelToken,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
