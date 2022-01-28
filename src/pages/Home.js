import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PerfectScrollbar from "react-perfect-scrollbar";

//API
import { api } from "../api";
//Components
import { ArticleCard, ArticleCardSkeleton } from "../components";
//Icons
import { Search, NextIcon, BackIcon, Close } from "../components/icons";

//Recoil
import { useAtoms } from "../recoil/hooks";
const Home = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const {
    state: { theme, articles, page },
    actions,
  } = useAtoms();

  const darkMode = theme === "dark";

  const trending = ["Bitcoin", "NFT", "Metaverse"];

  const getArticles = useCallback(
    async (query = "trending") => {
      setIsLoading(true);
      try {
        const results = await api({
          query,
          page,
          fields: "snippet,source,pub_date,_id,word_count,headline,multimedia",
        });

        actions.setArticles(results.response.docs);
      } catch (error) {
        console.log("🚀 --- getArticles --- error", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    },
    [page]
  );

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  useEffect(() => {
    searchText.length > 0 && getArticles(searchText);
  }, [searchText]);

  const search = () => {
    console.log("search");
  };

  const TrendingComponent = ({ item }) => (
    <span
      className="cursor-pointer hover:opacity-70 transition-opacity"
      onClick={() => {
        setSearchText(item);
        console.log(item);
      }}
    >
      #{item}
    </span>
  );

  return (
    <div className="flex flex-col items-center w-full h-full space-y-3">
      <div className="flex w-96 items-center focus-within:w-[500px] transition-all relative">
        <input
          className={`w-full border hover:border-opacity-70 rounded-md ring-0 outline-none p-2 ${
            darkMode
              ? "bg-bgDark border-bgLight text-bgLight"
              : "bg-bgLight border-bgDark text-grey"
          }`}
          placeholder={t("search")}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {!searchText.length > 0 ? (
          <Search darkMode={darkMode} onClick={search} />
        ) : (
          <Close darkMode={darkMode} onClick={() => setSearchText("")} />
        )}
        <div
          className={`absolute left-0 top-12 flex space-x-3 font-thin text-sm  ${
            darkMode ? "text-bgLight" : "text-grey"
          } `}
        >
          <span className="font-semibold">Trending: </span>
          {trending.map((item, ind) => (
            <TrendingComponent item={item} key={ind} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full px-20 space-y-3">
        <span className={`text-2xl ${darkMode ? "text-bgLight" : "text-grey"}`}>
          {t("latest")}
        </span>
        <hr
          className={`w-8 border-2  rounded-sm ${
            darkMode ? "border-bgLight" : "border-grey"
          }`}
        />
        <PerfectScrollbar>
          <div
            className={`flex flex-col space-y-3 w-full ${
              darkMode ? "bg-primary" : "bg-white"
            }  shadow-md rounded-md h-96`}
          >
            {isLoading
              ? Array(5)
                  .fill("")
                  .map((item, ind) => (
                    <ArticleCardSkeleton
                      key={ind.toString()}
                      darkMode={darkMode}
                    />
                  ))
              : articles.map((item) => (
                  <ArticleCard item={item} key={item._id} />
                ))}
          </div>
        </PerfectScrollbar>

        <div className="flex w-full flex-row justify-end space-x-5 items-center">
          <BackIcon
            onClick={() => actions.setPage(page - 1)}
            disabled={page === 0}
            darkMode={darkMode}
          />
          <span
            className={`text-lg ${darkMode ? "text-bgLight" : "text-grey"}`}
          >
            {page + 1}
          </span>
          <NextIcon
            onClick={() => actions.setPage(page + 1)}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
