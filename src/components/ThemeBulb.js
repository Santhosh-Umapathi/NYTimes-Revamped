import { memo } from "react";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Icons
import { LightOff, LightOn } from "./icons";

const ThemeBulb = () => {
  const {
    state: { darkMode },
    actions,
  } = useAtoms();

  const toggleTheme = () =>
    darkMode ? actions.toggleTheme("light") : actions.toggleTheme("dark");

  return darkMode ? (
    <LightOff onClick={toggleTheme} />
  ) : (
    <LightOn onClick={toggleTheme} />
  );
};

export default memo(ThemeBulb);
