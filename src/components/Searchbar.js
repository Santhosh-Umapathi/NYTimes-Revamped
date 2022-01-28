import { useState, useEffect, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
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
    state: { theme },
    actions,
  } = useAtoms();
  const { t } = useTranslation();

  const [searchText, setSearchText] = useState("");

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

        actions.setArticles(results.response.docs);
      } catch (error) {
        console.log("🚀 --- getArticles --- error", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    },
    [page]
  );

  const clearSearch = useCallback(() => {
    setSearchText("");
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
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Search darkMode={darkMode} animate={searchText.length > 0} />

      <Close
        darkMode={darkMode}
        onClick={clearSearch}
        animate={!searchText.length > 0}
      />

      <TrendingBar darkMode={darkMode} setSearchText={setSearchText} />
    </div>
  );
};

export default memo(Searchbar);
