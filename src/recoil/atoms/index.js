import { atom } from "recoil";
//Helpers
import { getInitialTheme } from "../../helpers";

//------------------------------------------------------------------
//MARK: State Management - Default Initial values
//------------------------------------------------------------------
export const darkMode = atom({
  key: "darkMode",
  default: getInitialTheme(),
});

export const articles = atom({
  key: "articles",
  default: [],
});

export const article = atom({
  key: "article",
  default: null,
});

export const searchText = atom({
  key: "searchText",
  default: "",
});
