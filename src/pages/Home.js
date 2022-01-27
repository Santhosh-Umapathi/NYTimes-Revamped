import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//API
import { api } from "../api";
//Components
import { ArticleCard, ArticleCardSkeleton } from "../components";
//Icons
import { Search, NextIcon, BackIcon } from "../components/icons";

//Recoil
import { useAtoms } from "../recoil/hooks";
const Home = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { theme, articles, page },
    actions,
  } = useAtoms();

  const darkMode = theme === "dark";

  const getArticles = useCallback(
    async (query = "trending") => {
      setIsLoading(true);
      try {
        const results = await api({
          query,
          page,
          // filterQuery:
          //   '_id:"nyt://article/d2642fad-dc45-54f2-9c1f-0b1aaa1898f4"',
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

  const search = () => {
    console.log("search");
  };

  return (
    <div className="flex flex-col items-center w-full h-full space-y-3">
      <div className="flex w-96 items-center">
        <input
          className={`w-full border hover:border-opacity-70 transition-all rounded-md ring-0 outline-none p-2 ${
            theme === "dark"
              ? "bg-bgDark border-bgLight focus:shadow-sm focus:shadow-bgLight"
              : "bg-bgLight border-bgDark focus:shadow-lg"
          }`}
          placeholder={t("search")}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Search darkMode={darkMode} onClick={search} />
      </div>
      <div className="flex flex-col w-full px-20  space-y-3">
        <span className="text-2xl">{t("latest")}</span>
        <hr className="w-8 border-2 border-grey rounded-sm" />
        <div className="flex flex-col space-y-3 w-full bg-white shadow-md rounded-md h-96 overflow-y-scroll">
          {isLoading
            ? Array(5)
                .fill("")
                .map((item, ind) => (
                  <ArticleCardSkeleton key={ind.toString()} />
                ))
            : articles.map((item) => (
                <ArticleCard item={item} key={item._id} />
              ))}
        </div>
        <div className="flex w-full flex-row justify-end space-x-5 items-center">
          <BackIcon
            onClick={() => actions.setPage(page - 1)}
            disabled={page === 0}
            darkMode={darkMode}
          />
          <span className="text-lg">{page + 1}</span>
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
