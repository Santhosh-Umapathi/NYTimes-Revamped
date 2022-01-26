import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { pathname } = useLocation();
  // console.log("🚀 --- Navbar --- location", pathname);

  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : "flex"
      } w-full h-16 bg-red-300`}
    >
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
