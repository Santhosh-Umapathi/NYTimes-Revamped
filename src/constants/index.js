export const TRENDING = ["Bitcoin", "NFT", "Metaverse"];
//API
export const API_KEY = "&api-key=" + process.env.REACT_APP_NYTIMES_API_KEY;
export const BASE_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json";
export const FILTER_FIELDS =
  "snippet,source,pub_date,_id,word_count,headline,multimedia";
export const IMAGE_SOURCE = "https://www.nytimes.com/"; //Image base url
//Route
export const BASE_ROUTE = "/home?query=trending&page=0";
//Profiles
export const GITHUB_URL = "https://github.com/Santhosh-Umapathi";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/santhosh-umapathi-05011992/";

//Known errors that can be ignored
export const ERROR_IGNORE_LIST = [
  "Cancelling previous requests for search", // Request cancelled during typing
  "Request failed with status code 429", //Too many requests
];
