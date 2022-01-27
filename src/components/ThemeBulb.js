import { memo } from "react";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Icons
import { LightOff, LightOn } from "./icons";

const ThemeBulb = () => {
  const {
    state: { theme },
    actions: { setTheme },
  } = useAtoms();

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return theme === "dark" ? (
    <LightOff onClick={toggleTheme} />
  ) : (
    <LightOn onClick={toggleTheme} />
  );
};

export default memo(ThemeBulb);
