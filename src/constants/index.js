export const TRENDING = ["Bitcoin", "NFT", "Metaverse"];
//API
export const API_KEY = "&api-key=" + process.env.REACT_APP_NYTIMES_API_KEY;
export const BASE_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//Route
export const BASE_ROUTE = "/home?query=trending&page=0";

export const FILTER_FIELDS =
  "snippet,source,pub_date,_id,word_count,headline,multimedia";
