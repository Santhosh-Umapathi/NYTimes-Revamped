import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//Components
import { Skeleton } from ".";
//Helpers
import { readTime, renderHTML } from "../helpers";
//Icon
import { LeftArrow } from "./icons";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Constants
import { IMAGE_SOURCE } from "../constants";

const ArticleDetailCard = ({ item = {} }) => {
  const {
    state: { darkMode },
  } = useAtoms();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);

  //Destructing item
  const {
    headline,
    snippet,
    source,
    word_count,
    pub_date,
    multimedia,
    web_url,
  } = item;
  const imageUrl = multimedia[9]?.url;

  return (
    <div className="flex flex-col px-5 space-y-5 w-full relative">
      <LeftArrow onClick={() => navigate(-1)} />
      {imageUrl && (
        <img
          src={IMAGE_SOURCE + imageUrl}
          className="rounded-md object-cover w-full h-[300px]"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {!imageLoaded && imageUrl && (
        <Skeleton
          css="flex w-full h-[300px] rounded-md absolute top-8"
          baseColor="#24292F"
          highlightColor="#0D1116"
        />
      )}
      <div
        className={`flex flex-col w-full ${
          darkMode ? "text-bgLight" : "text-grey"
        }`}
      >
        <span className="text-4xl font-bold mb-3">{headline.main}</span>
        <div className="flex space-x-40 mb-8 font-thin">
          <span>
            {t("publisher")}
            {source}
          </span>
          <span>
            {readTime(word_count)} {t("read")}
          </span>
          <span>{new Date(pub_date).toDateString()}</span>
        </div>
        <span className="text-xl mb-5">{renderHTML(snippet)}</span>
        <div className="flex select-none">
          <a
            href={web_url}
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

export default memo(ArticleDetailCard);
