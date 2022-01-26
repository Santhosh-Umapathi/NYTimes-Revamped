import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Logo
import { Logo } from "../components";

const Splash = () => {
  const navigate = useNavigate();

  // Show Splash Screen- Fist time only
  useEffect(() => {
    const isSplashLoaded = localStorage.getItem("splash");
    isSplashLoaded === "yes" && navigate("/home");
    localStorage.setItem("splash", "yes");
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-bgLight">
      <Logo css="w-[500px] animate-pulse" cssText="animate-pulse" />
    </div>
  );
};

export default Splash;
