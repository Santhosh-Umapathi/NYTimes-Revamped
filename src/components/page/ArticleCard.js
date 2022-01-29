import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//Helpers
import { readTime, renderHTML } from "../../helpers";
//Recoil
import { useAtoms } from "../../recoil/hooks";
//Constants
import { IMAGE_SOURCE } from "../../constants";
//Components
import { Skeleton } from "..";

const ArticleCard = ({ item = {} }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    state: { darkMode },
  } = useAtoms();
  const [imageLoaded, setImageLoaded] = useState(false);

  //Destructing item
  const { _id, headline, snippet, source, word_count, pub_date, multimedia } =
    item;
  const imageUrl = multimedia[0]?.url;

  return (
    <div
      className={`flex flex-col md:flex-row border-b p-2 md:p-5 md:space-x-5 hover:opacity-60 transition-opacity cursor-pointer relative ${
        darkMode
          ? "bg-primary border-bgDark text-bgLight"
          : "bg-white text-grey"
      }`}
      onClick={() => navigate(`/blog?id=${_id}`)}
    >
      {imageUrl && (
        <img
          src={IMAGE_SOURCE + imageUrl}
          className="h-24 md:w-[200px] rounded-md object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {!imageLoaded && imageUrl && (
        <Skeleton css="flex w-40 h-24 rounded-md absolute left-0" />
      )}
      <div className="flex flex-col space-y-1 md:space-y-2 w-full">
        <span className="text-lg md:text-xl font-bold">{headline.main}</span>
        <span className="text-xs md:text-sm">{renderHTML(snippet)}</span>
        <div className="flex space-x-5 md:space-x-10 text-[10px] md:text-xs font-thin">
          <span>
            {t("publisher")}
            {source}
          </span>
          <span>
            {readTime(word_count)} {t("read")}
          </span>
          <span>{new Date(pub_date).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
