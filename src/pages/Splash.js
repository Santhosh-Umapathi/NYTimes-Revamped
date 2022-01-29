import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Logo
import { Logo } from "../components";
//Constants
import { BASE_ROUTE } from "../constants";
//Recoil
import { useAtoms } from "../recoil/hooks";

const Splash = () => {
  const navigate = useNavigate();

  const {
    state: { darkMode },
  } = useAtoms();

  // Show Splash Screen- Fist time only
  useEffect(() => {
    const isSplashLoaded = localStorage.getItem("splash");
    isSplashLoaded === "yes" && navigate(BASE_ROUTE);
    localStorage.setItem("splash", "yes");
    setTimeout(() => navigate(BASE_ROUTE), 2000);
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-screen h-screen ${
        darkMode ? "bg-bgDark" : "bg-bgLight"
      } `}
    >
      <Logo
        css={`w-[500px] animate-pulse ${
          darkMode ? "fill-bgLight" : "fill-grey"
        }  `}
        cssText={`text-xl animate-pulse ${
          darkMode ? "text-bgLight" : "text-grey"
        }`}
      />
    </div>
  );
};

export default Splash;
