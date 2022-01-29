import { useEffect, useCallback, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
//API
import axios from "axios";
import { api } from "../../api";
//Recoil
import { useAtoms } from "../../recoil/hooks";
//Icons
import { Close, Search } from "../icons";
//Components
import { TrendingBar } from "..";
//Helpers
import { ErrorToast } from "../../helpers";
//Constants
import { FILTER_FIELDS } from "../../constants";

const Searchbar = ({ setIsLoading = () => {}, page = 0 }) => {
  const {
    state: { darkMode, searchText },
    actions: { setArticles, setSearchText },
  } = useAtoms();
  const { t } = useTranslation();
  const [_, setSearchParams] = useSearchParams();

  //Network request to get articles
  const getArticles = useCallback(
    async (query = "trending", ct) => {
      setIsLoading(true);
      try {
        const results = await api({
          query,
          page,
          fields: FILTER_FIELDS,
          cancelToken: ct?.token,
        });

        setArticles(results.response.docs);
      } catch (error) {
        ErrorToast({ message: t("error"), darkMode });
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    },
    [page]
  );

  // Search field handler
  const onChangeHandler = (e, val) => {
    const value = e?.target?.value ?? val;
    setSearchText(value);
    setSearchParams({ query: value, page: 0 });
  };

  const clearSearch = useCallback(() => {
    setSearchText("");
    setSearchParams({ query: "trending", page: 0 });
    getArticles();
  }, []);

  //Search as you Type (optimized)
  useEffect(() => {
    const NetworkRequest = axios.CancelToken.source();
    searchText.length > 0 && getArticles(searchText, NetworkRequest);

    return () =>
      NetworkRequest.cancel("Cancelling previous requests for search");
  }, [searchText]);

  return (
    <div className="flex w-full md:w-96 items-center sticky top-16">
      <input
        className={`w-full border hover:border-opacity-50 focus:border-opacity-100 rounded-md ring-0 outline-none p-2 transition-opacity ${
          darkMode
            ? "bg-bgDark border-bgLight text-bgLight"
            : "bg-bgLight border-bgDark text-grey"
        }`}
        placeholder={t("search")}
        value={searchText}
        onChange={onChangeHandler}
      />

      <Search animate={searchText.length > 0} />
      <Close onClick={clearSearch} animate={!searchText.length > 0} />
      <TrendingBar setSearchText={onChangeHandler} />
    </div>
  );
};

export default memo(Searchbar);
