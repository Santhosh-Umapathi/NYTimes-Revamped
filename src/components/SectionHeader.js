import { memo } from "react";
import { useTranslation } from "react-i18next";

const SectionHeader = ({ darkMode = false, isSearching = false }) => {
  const { t } = useTranslation();

  return (
    <>
      <span className={`text-2xl ${darkMode ? "text-bgLight" : "text-grey"}`}>
        {isSearching ? t("results") : t("latest")}
      </span>
      <hr
        className={`w-8 border-2 rounded-sm ${
          darkMode ? "border-bgLight" : "border-grey"
        }`}
      />
    </>
  );
};

export default memo(SectionHeader);
