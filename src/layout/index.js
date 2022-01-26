//Layout Components
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen flex-col bg-bgLight">
      <Navbar />

      <div className="flex"> {children}</div>
    </div>
  );
};

export default Layout;
