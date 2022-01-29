import { useEffect, useCallback, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

//API
import axios from "axios";
import { api } from "../api";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Icons
import { Close, Search } from "./icons";
//Components
import { TrendingBar } from ".";

const Searchbar = ({ setIsLoading = () => {}, page = 0 }) => {
  const {
    state: { theme, searchText },
    actions: { setArticles, setSearchText },
  } = useAtoms();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const darkMode = theme === "dark";

  const getArticles = useCallback(
    async (query = "trending", ct) => {
      setIsLoading(true);
      try {
        const results = await api({
          query,
          page,
          fields: "snippet,source,pub_date,_id,word_count,headline,multimedia",
          cancelToken: ct?.token,
        });

        setArticles(results.response.docs);
      } catch (error) {
        toast.error(t("error"), {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          theme: darkMode ? "dark" : "light",
          style: { background: darkMode && "#0D1116" },
        });
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    },
    [page]
  );

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
    <div className="flex w-96 items-center  sticky top-16">
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

      <Search darkMode={darkMode} animate={searchText.length > 0} />

      <Close
        darkMode={darkMode}
        onClick={clearSearch}
        animate={!searchText.length > 0}
      />

      <TrendingBar darkMode={darkMode} setSearchText={onChangeHandler} />
    </div>
  );
};

export default memo(Searchbar);
