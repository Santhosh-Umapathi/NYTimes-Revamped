//Layout Components
import Footer from "./footer";
import Navbar from "./navbar";
//Recoil
import { useAtoms } from "../recoil/hooks";
import useLang from "../hooks/useLang";

const Layout = ({ children }) => {
  const {
    state: { theme },
  } = useAtoms();

  useLang();

  return (
    <div
      className={`flex w-full h-screen flex-col ${
        theme === "dark" ? "bg-bgDark" : "bg-bgLight"
      } transition-all`}
    >
      <Navbar />
      <div className="flex">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
