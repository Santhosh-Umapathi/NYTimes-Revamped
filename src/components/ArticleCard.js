import { memo } from "react";
import { useNavigate } from "react-router-dom";
//Helpers
import { readTime, renderHTML } from "../helpers";

const ArticleCard = ({ item = {} }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex border-b rounded-md p-5 space-x-5 hover:opacity-60 transition-opacity cursor-pointer"
      onClick={() => {
        navigate(`/${item._id}`);
      }}
    >
      {item.multimedia[0]?.url && (
        <img
          src={"https://www.nytimes.com/" + item.multimedia[0]?.url}
          className="h-24 rounded-md object-contain"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <span className="text-xl font-bold">{item.headline.main}</span>
        <span className="text-sm">{renderHTML(item.snippet)}</span>
        <div className="flex space-x-10 text-xs font-thin">
          <span>{item.source}</span>
          <span>{readTime(item.word_count)} minute read</span>
          <span>{new Date(item.pub_date).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ArticleCard);
