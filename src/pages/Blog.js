import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
//API
import { api } from "../api";
//Components
import { ArticleDetailCard, ArticleDetailSkeleton } from "../components";
//Constants
import { FILTER_FIELDS } from "../constants";
//Helpers
import { ErrorToast } from "../helpers";
//Recoil
import { useAtoms } from "../recoil/hooks";

const Blog = () => {
  const {
    state: { darkMode, article },
    actions,
  } = useAtoms();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const id = searchParams.get("id");

  const getArticle = useCallback(async () => {
    try {
      const results = await api({
        filterQuery: `_id:"${id}"`,
        fields: FILTER_FIELDS + ",web_url",
      });

      actions.setArticle(results.response.docs[0]);
    } catch (error) {
      ErrorToast({ message: t("error"), darkMode });
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [id]);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div className={`flex w-full`}>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : (
        <ArticleDetailCard item={article} />
      )}
    </div>
  );
};

export default Blog;
