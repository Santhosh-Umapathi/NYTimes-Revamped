import { useLocation } from "react-router-dom";
//Components
import { Logo } from "../components";
import { LightOff, LightOn } from "../components/icons";

const Navbar = (props) => {
  const { pathname } = useLocation();
  // console.log("🚀 --- Navbar --- location", pathname);

  const toggleTheme = () => {};

  const changeLanguage = () => {};

  return (
    <div
      className={`${pathname === "/" ? "hidden" : "flex"} w-full h-16 
      items-center justify-between shadow-md rounded-b-xl bg-white px-10 z-50
      `}
    >
      <Logo css="w-[150px]" cssText="text-sm" />

      <div className="flex items-center justify-center space-x-10">
        {true ? (
          <LightOn onClick={toggleTheme} />
        ) : (
          <LightOff onClick={toggleTheme} />
        )}
        <div className="flex space-x-2">
          <span
            onClick={() => changeLanguage("en")}
            className={`${
              true ? "font-bold" : "font-normal"
            } hover:opacity-70 transition-opacity cursor-pointer`}
          >
            EN
          </span>
          <span>|</span>
          <span
            onClick={() => changeLanguage("de")}
            className={`${
              false ? "font-bold" : "font-normal"
            } hover:opacity-70 transition-opacity cursor-pointer`}
          >
            DE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
