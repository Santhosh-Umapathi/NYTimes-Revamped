import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

export const useAtoms = () => {
  const [theme, updateTheme] = useRecoilState(atoms.theme);
  const [articles, updateArticles] = useRecoilState(atoms.articles);
  const [article, updateArticle] = useRecoilState(atoms.article);

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

  //Atoms State
  const state = {
    theme,
    articles,
    article,
  };

  //Atoms Actions
  const actions = {
    setTheme,
    setArticles,
    setArticle,
  };

  return { state, actions };
};
