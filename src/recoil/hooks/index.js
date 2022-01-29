import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

//------------------------------------------------------------------
//MARK: State Management - States & Actions Hook
//------------------------------------------------------------------

export const useAtoms = () => {
  const [darkMode, updateDarkMode] = useRecoilState(atoms.darkMode);
  const [articles, updateArticles] = useRecoilState(atoms.articles);
  const [article, updateArticle] = useRecoilState(atoms.article);
  const [searchText, updateSearchText] = useRecoilState(atoms.searchText);

  const toggleTheme = (payload) => {
    const root = window.document.documentElement;
    const isDark = payload === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(payload);
    localStorage.setItem("color-theme", payload);
    updateDarkMode(payload === "dark");
  };

  const setArticles = (payload) => {
    updateArticles(payload);
  };

  const setArticle = (payload) => {
    updateArticle(payload);
  };

  const setSearchText = (payload) => {
    updateSearchText(payload);
  };

  //Atoms State
  const state = {
    darkMode,
    articles,
    article,
    searchText,
  };

  //Atoms Actions
  const actions = {
    toggleTheme,
    setArticles,
    setArticle,
    setSearchText,
  };

  return { state, actions };
};
