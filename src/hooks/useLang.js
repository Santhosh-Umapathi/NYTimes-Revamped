import { useEffect } from "react";
//Recoil
import { useTranslation } from "react-i18next";

//Setting language based on previous selection
export default () => {
  const { i18n } = useTranslation();

  const langauge = localStorage.getItem("language");

  useEffect(() => {
    if (langauge) {
      i18n.changeLanguage(langauge);
    }
  }, [langauge]);

  return;
};
