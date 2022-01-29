import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
//API
import { api } from "../api";
//Components
import {
  ArticleCard,
  ArticleCardSkeleton,
  Pagination,
  Searchbar,
  SectionHeader,
} from "../components";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Constants
import { FILTER_FIELDS } from "../constants";
//Helpers
import { ErrorToast } from "../helpers";

const Home = () => {
  const {
    state: { theme, articles, searchText },
    actions,
  } = useAtoms();
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const darkMode = theme === "dark";

  //Updating Page Value
  let page =
    +searchParams.get("page") <= 0 || isNaN(+searchParams.get("page"))
      ? 0
      : +searchParams.get("page");
  //Updating Query Value
  let query =
    searchText !== ""
      ? searchText
      : searchParams.get("query")
      ? searchParams.get("query")
      : "trending";

  //Updating URL Queries
  useEffect(() => {
    //Query Validation
    if (!searchParams.get("query"))
      setSearchParams({ query: "trending", page: 0 });

    //Page Validation
    if (
      !searchParams.get("page") ||
      isNaN(+searchParams.get("page")) ||
      +searchParams.get("page") < 0
    )
      setSearchParams({ query, page: 0 });
  }, []);

  const getArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await api({
        query,
        page,
        fields: FILTER_FIELDS,
      });

      actions.setArticles(results.response.docs);
    } catch (error) {
      ErrorToast({ message: t("error"), darkMode });
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [page]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="flex flex-col items-center w-full h-full space-y-3">
      <Searchbar setIsLoading={setIsLoading} page={page} />

      <div className="flex flex-col w-full px-20 space-y-3">
        <SectionHeader
          darkMode={darkMode}
          isSearching={searchText.length > 0}
        />
        <PerfectScrollbar>
          <div
            className={`flex flex-col space-y-3 w-full ${
              darkMode ? "bg-primary" : "bg-white"
            }  shadow-md rounded-md h-96`}
          >
            {isLoading ? (
              Array(5)
                .fill("")
                .map((_, ind) => (
                  <ArticleCardSkeleton
                    key={ind.toString()}
                    darkMode={darkMode}
                  />
                ))
            ) : !articles.length > 0 ? (
              <span
                className={`p-5 text-xl ${
                  darkMode ? "text-bgLight" : "text-grey"
                }`}
              >
                {t("notFound")}
              </span>
            ) : (
              articles.map((item) => <ArticleCard item={item} key={item._id} />)
            )}
          </div>
        </PerfectScrollbar>

        {articles.length > 0 && (
          <Pagination page={page} query={query} darkMode={darkMode} />
        )}
      </div>
    </div>
  );
};

export default Home;
