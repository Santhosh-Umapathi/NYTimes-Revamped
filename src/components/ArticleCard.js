import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//Skeleton Placeholder
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//Helpers
import { readTime, renderHTML } from "../helpers";
import { useAtoms } from "../recoil/hooks";

const ArticleCard = ({ item = {} }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useAtoms();
  const [imageLoaded, setImageLoaded] = useState(false);

  const darkMode = state.theme === "dark";

  return (
    <div
      className={`flex border-b p-5 space-x-5 hover:opacity-60 transition-opacity cursor-pointer relative ${
        darkMode
          ? "bg-primary border-bgDark text-bgLight"
          : "bg-white text-grey"
      }`}
      onClick={() => {
        navigate(`/blog?id=${item._id}`);
      }}
    >
      {item.multimedia[0]?.url && (
        <img
          src={"https://www.nytimes.com/" + item.multimedia[0]?.url}
          className="h-24 w-[200px] rounded-md object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {!imageLoaded && item.multimedia[0]?.url && (
        <Skeleton
          containerClassName="flex w-40 h-24 rounded-md absolute left-0"
          baseColor={darkMode && "#0D1116"}
          highlightColor={darkMode && "#24292F"}
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <span className="text-xl font-bold">{item.headline.main}</span>
        <span className="text-sm">{renderHTML(item.snippet)}</span>
        <div className="flex space-x-10 text-xs font-thin">
          <span>
            {t("publisher")}
            {item.source}
          </span>
          <span>
            {readTime(item.word_count)} {t("read")}
          </span>
          <span>{new Date(item.pub_date).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
