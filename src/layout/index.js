//Layout Components
import Footer from "./footer";
import Navbar from "./navbar";
//Recoil
import { useAtoms } from "../recoil/hooks";

const Layout = ({ children }) => {
  const {
    state: { theme },
  } = useAtoms();

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
