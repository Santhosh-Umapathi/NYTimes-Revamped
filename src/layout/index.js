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
    <body
      className={`flex w-full h-screen flex-col ${
        theme === "dark" ? "bg-bgDark" : "bg-bgLight"
      } transition-all`}
    >
      <Navbar />
      <div className="flex">{children}</div>
      <Footer />
    </body>
  );
};

export default Layout;
