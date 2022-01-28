import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Logo
import { Logo } from "../components";
import { BASE_ROUTE } from "../constants";
//Recoil
import { useAtoms } from "../recoil/hooks";

const Splash = () => {
  const navigate = useNavigate();

  const {
    state: { theme },
  } = useAtoms();

  // Show Splash Screen- Fist time only
  useEffect(() => {
    const isSplashLoaded = localStorage.getItem("splash");
    isSplashLoaded === "yes" && navigate(BASE_ROUTE);
    localStorage.setItem("splash", "yes");
    setTimeout(() => {
      navigate(BASE_ROUTE);
    }, 2000);
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-screen h-screen ${
        theme === "dark" ? "bg-bgDark" : "bg-bgLight"
      } `}
    >
      <Logo
        css={`w-[500px] animate-pulse ${
          theme === "dark" ? "fill-bgLight" : "fill-grey"
        }  `}
        cssText={`animate-pulse ${
          theme === "dark" ? "text-bgLight" : "text-grey"
        }`}
      />
    </div>
  );
};

export default Splash;
