import { memo } from "react";
import { useLocation } from "react-router-dom";
//Icons
import { Copyright, Github, LinkedinIcon } from "../components/icons";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : "flex"
      } items-center h-12 fixed bottom-0 bg-primary w-full space-x-2 px-10 text-bgLight`}
    >
      <Copyright />
      <span>Santhosh Umapathi</span>
      <Github />
      <LinkedinIcon />
    </div>
  );
};

export default memo(Footer);
