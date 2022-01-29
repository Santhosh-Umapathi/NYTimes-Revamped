import { useAtoms } from "../../recoil/hooks";

const Search = ({ onClick = () => {}, animate = false }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      xmlSpace="preserve"
      className={`w-8 h-8 cursor-pointer absolute right-5 ${
        animate
          ? "-translate-y-5 transition-all opacity-0 invisible"
          : "translate-y-0 transition-all opacity-100 visible hover:opacity-70"
      } 
    ${darkMode ? "fill-bgLight" : "fill-bgDark"}`}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M49.557 18.444a2 2 0 1 1-2.828 2.828c-7.02-7.019-18.438-7.019-25.457 0a2 2 0 1 1-2.828-2.828c8.577-8.578 22.535-8.578 31.113 0zM90 82a7.94 7.94 0 0 1-2.344 5.656C86.146 89.168 84.137 90 82 90s-4.146-.832-5.656-2.344l-21-21a2 2 0 0 1 0-2.828L58.172 61l-4.435-4.435C48.457 61.188 41.553 64 34 64 17.458 64 4 50.542 4 34S17.458 4 34 4s30 13.458 30 30c0 7.553-2.812 14.457-7.435 19.737L61 58.172l2.828-2.828a2 2 0 0 1 2.828 0l21 21A7.94 7.94 0 0 1 90 82zM60 34C60 19.664 48.337 8 34 8S8 19.664 8 34s11.663 26 26 26 26-11.664 26-26zm26 48a3.973 3.973 0 0 0-1.172-2.828L65.242 59.586l-5.656 5.656 19.586 19.586c1.512 1.512 4.145 1.512 5.656 0A3.973 3.973 0 0 0 86 82z"
      />
    </svg>
  );
};

export default Search;
