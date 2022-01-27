import { memo } from "react";
//Icons
import { Copyright, Github, LinkedinIcon } from "../components/icons";

const Footer = () => (
  <div
    className={`flex items-center h-12 absolute bottom-0 bg-primary w-full space-x-2 px-10 text-bgLight`}
  >
    <Copyright />
    <span>Santhosh Umapathi</span>
    <Github />
    <LinkedinIcon />
  </div>
);

export default memo(Footer);
