import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../api";
import { ArticleDetailCard, ArticleDetailSkeleton } from "../components";
import { useAtoms } from "../recoil/hooks";

const Blog = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const { state, actions } = useAtoms();

  const id = location.search.split("?id=").pop(); //Extracting id from the query

  const getArticle = useCallback(async () => {
    try {
      const results = await api({
        filterQuery: `_id:"${id}"`,
        fields:
          "snippet,source,pub_date,_id,word_count,headline,multimedia,web_url",
      });

      actions.setArticle(results.response.docs[0]);
    } catch (error) {
      console.log("🚀 --- getArticle --- error", error);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, []);

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div className="flex w-full ">
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : (
        <ArticleDetailCard item={state.article} />
      )}
    </div>
  );
};

export default Blog;
