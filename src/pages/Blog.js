import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../api";
import { ArticleDetailCard, ArticleDetailSkeleton } from "../components";
import { useAtoms } from "../recoil/hooks";

const Blog = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const { state, actions } = useAtoms();
  const { t } = useTranslation();

  const id = location.search.split("?id=").pop(); //Extracting id from the query
  const darkMode = state.theme === "dark";

  const getArticle = useCallback(async () => {
    try {
      const results = await api({
        filterQuery: `_id:"${id}"`,
        fields:
          "snippet,source,pub_date,_id,word_count,headline,multimedia,web_url",
      });

      actions.setArticle(results.response.docs[0]);
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
  }, []);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div className={`flex w-full`}>
      {isLoading ? (
        <ArticleDetailSkeleton darkMode={darkMode} />
      ) : (
        <ArticleDetailCard item={state.article} />
      )}
    </div>
  );
};

export default Blog;
