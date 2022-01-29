import { useAtoms } from "../../recoil/hooks";

const Close = ({ onClick = () => {}, animate = false }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      className={`w-5 h-5  cursor-pointer absolute right-5 ${
        animate
          ? "translate-y-5 transition-all opacity-0 invisible"
          : "translate-y-0 transition-all opacity-100 visible hover:opacity-70"
      } ${darkMode ? "fill-bgLight" : "fill-bgDark"}`}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4.59 59.41a2 2 0 0 0 2.83 0L32 34.83l24.59 24.58a2 2 0 0 0 2.83-2.83L34.83 32 59.41 7.41a2 2 0 0 0-2.83-2.83L32 29.17 7.41 4.59a2 2 0 0 0-2.82 2.82L29.17 32 4.59 56.59a2 2 0 0 0 0 2.82z"
      />
    </svg>
  );
};

export default Close;
