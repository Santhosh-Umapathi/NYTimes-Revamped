import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
//API
import { api } from "../api";
//Constants
import { FILTER_FIELDS } from "../constants";
//Helpers
import { ErrorToast } from "../helpers";
//Recoil
import { useAtoms } from "../recoil/hooks";
//Components
import { Skeleton } from "../components";
//Components - Lazy Loading
const ArticleDetailCard = lazy(() =>
  import("../components/page/ArticleDetailCard")
);
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
        <Suspense fallback={<Skeleton css="w-40 h-20" />}>
          <ArticleDetailSkeleton />
        </Suspense>
      ) : (
        <Suspense fallback={<Skeleton css="w-40 h-20" />}>
          <ArticleDetailCard item={article} />
        </Suspense>
      )}
    </div>
  );
};

export default Blog;
