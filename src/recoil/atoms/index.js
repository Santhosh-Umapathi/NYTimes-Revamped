import { atom } from "recoil";
//Helpers
import { getInitialTheme } from "../../helpers";

export const theme = atom({
  key: "theme",
  default: getInitialTheme(),
});

export const articles = atom({
  key: "articles",
  default: [],
});
