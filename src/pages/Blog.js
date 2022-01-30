import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
//API
import { api } from "../api";
//Constants
import { ERROR_IGNORE_LIST, FILTER_FIELDS } from "../constants";
//Helpers
import { ErrorToast } from "../helpers";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Components
import { Skeleton } from "../components";
import ArticleDetailCard from "../components/page/ArticleDetailCard";

//Components - Lazy Loading
const ArticleDetailSkeleton = lazy(() =>
  import("../components/page/ArticleDetailSkeleton")
);

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
      !ERROR_IGNORE_LIST.includes(error.message) &&
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
        <Suspense fallback={<Skeleton css="flex w-full h-screen" />}>
          <ArticleDetailSkeleton />
        </Suspense>
      ) : (
        <ArticleDetailCard item={article} />
      )}
    </div>
  );
};

export default Blog;
