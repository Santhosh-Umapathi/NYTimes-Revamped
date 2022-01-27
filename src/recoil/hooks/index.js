import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

export const useAtoms = () => {
  const [theme, updateTheme] = useRecoilState(atoms.theme);
  const [articles, updateArticles] = useRecoilState(atoms.articles);
  const [article, updateArticle] = useRecoilState(atoms.article);
  const [page, updatePage] = useRecoilState(atoms.page);

  const setTheme = (payload) => {
    const root = window.document.documentElement;
    const isDark = payload === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(payload);
    localStorage.setItem("color-theme", payload);
    updateTheme(payload);
  };

  const setArticles = (payload) => {
    updateArticles(payload);
  };

  const setArticle = (payload) => {
    updateArticle(payload);
  };

  const setPage = (payload) => {
    updatePage(payload <= 0 ? 0 : payload);
  };

  //Atoms State
  const state = {
    theme,
    articles,
    article,
    page,
  };

  //Atoms Actions
  const actions = {
    setTheme,
    setArticles,
    setArticle,
    setPage,
  };

  return { state, actions };
};
