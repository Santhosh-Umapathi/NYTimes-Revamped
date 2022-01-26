import { useRecoilState } from "recoil";
//Atoms
import * as atoms from "../atoms";

export const useAtoms = () => {
  const [theme, updateTheme] = useRecoilState(atoms.theme);

  const setTheme = (payload) => {
    const root = window.document.documentElement;
    const isDark = payload === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(payload);
    localStorage.setItem("color-theme", payload);
    updateTheme(payload);
  };

  //Atoms State
  const state = {
    theme,
  };

  //Atoms Actions
  const actions = {
    setTheme,
  };

  return { state, actions };
};
