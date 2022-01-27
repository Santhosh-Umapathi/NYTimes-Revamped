import { memo } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const LanguageComponent = (val) => (
    <span
      onClick={() => changeLanguage(val)}
      className={`${
        i18n.language === val ? "font-bold" : "font-normal"
      } hover:opacity-70 transition-opacity cursor-pointer`}
    >
      {val.toUpperCase()}
    </span>
  );

  return (
    <div className="flex space-x-2 text-bgLight">
      {LanguageComponent("en")}
      <span>|</span>
      {LanguageComponent("de")}
    </div>
  );
};

export default memo(Language);
