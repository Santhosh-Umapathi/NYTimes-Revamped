import { useAtoms } from "../../recoil/hooks";

const BackIcon = ({ onClick = () => {}, disabled = false }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.787 490.787"
      xmlSpace="preserve"
      className={`w-4 h-4 ${darkMode ? "fill-bgLight" : "fill-bgDark"}
    ${
      disabled
        ? "cursor-not-allowed opacity-40"
        : "cursor-pointer hover:opacity-70 transition-opacity"
    }`}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M362.671 490.787a10.663 10.663 0 0 1-7.552-3.115L120.452 253.006c-4.164-4.165-4.164-10.917 0-15.083L355.119 3.256c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L143.087 245.454l227.136 227.115c4.171 4.16 4.179 10.914.019 15.085a10.67 10.67 0 0 1-7.571 3.133z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M362.671 490.787a10.663 10.663 0 0 1-7.552-3.115L120.452 253.006c-4.164-4.165-4.164-10.917 0-15.083L355.119 3.256c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L143.087 245.454l227.136 227.115c4.171 4.16 4.179 10.914.019 15.085a10.67 10.67 0 0 1-7.571 3.133z"
      />
    </svg>
  );
};

export default BackIcon;
