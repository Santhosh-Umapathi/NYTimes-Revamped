import { memo } from "react";
import { useTranslation } from "react-i18next";
//Constant
import { TRENDING } from "../constants";
//Recoil
import { useAtoms } from "../recoil/hooks";

const TrendingBar = ({ setSearchText = () => {} }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  const { t } = useTranslation();

  return (
    <div
      className={`absolute left-0 top-12 flex space-x-3 font-thin text-sm ${
        darkMode ? "text-bgLight" : "text-grey"
      }`}
    >
      <span className="font-semibold">{t("trending")}: </span>
      {TRENDING.map((item) => (
        <span
          className="cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => setSearchText(null, item)}
          key={item}
        >
          #{item}
        </span>
      ))}
    </div>
  );
};

export default memo(TrendingBar);
