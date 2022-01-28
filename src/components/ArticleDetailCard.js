//Helpers
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//Helpers
import { readTime, renderHTML } from "../helpers";
//Icon
import { LeftArrow } from "./icons";
import { useAtoms } from "../recoil/hooks";

const ArticleDetailCard = ({ item = {} }) => {
  const { t } = useTranslation();
  const { state } = useAtoms();

  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();
  const darkMode = state.theme === "dark";

  return (
    <div className="flex flex-col px-5 space-y-5 w-full relative">
      <LeftArrow onClick={() => navigate(-1)} darkMode={darkMode} />
      {item.multimedia[4]?.url && (
        <img
          src={"https://www.nytimes.com/" + item.multimedia[9]?.url}
          className="rounded-md object-cover w-full h-[300px]"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {!imageLoaded && (
        <Skeleton
          containerClassName="flex w-full h-[300px] rounded-md absolute top-8"
          baseColor={darkMode && "#24292F"}
          highlightColor={darkMode && "#0D1116"}
        />
      )}
      <div
        className={`flex flex-col w-full ${
          darkMode ? "text-bgLight" : "text-grey"
        }`}
      >
        <span className="text-4xl font-bold mb-3">{item.headline.main}</span>
        <div className="flex space-x-40 mb-8 font-thin">
          <span>
            {t("publisher")}
            {item.source}
          </span>
          <span>
            {readTime(item.word_count)} {t("read")}
          </span>
          <span>{new Date(item.pub_date).toDateString()}</span>
        </div>
        <span className="text-xl mb-5">{renderHTML(item.snippet)}</span>
        <div className="flex">
          <a
            href={item.web_url}
            target="_blank"
            className="underline tracking-wide text-orange-600 hover:opacity-70 transition-opacity"
          >
            {t("readMore")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailCard;
