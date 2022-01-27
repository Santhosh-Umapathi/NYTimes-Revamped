import { memo } from "react";
import { useLocation } from "react-router-dom";
//Components
import { Logo, Language, ThemeBulb } from "../components";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${pathname === "/" ? "hidden" : "flex"} w-full h-16 
      items-center justify-between bg-primary px-10 z-50 mb-5`}
    >
      <Logo css="w-[150px] fill-bgLight" cssText="text-sm" />

      <div className="flex items-center justify-center space-x-10">
        <ThemeBulb />
        <Language />
      </div>
    </div>
  );
};

export default memo(Navbar);
